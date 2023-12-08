import { Component, h } from '@stencil/core';
import { Request } from "../interfaces/request-interface";
import { Book } from "../interfaces/book-interface";
import { Borrow } from "../interfaces/borrow-iterface";

@Component({
  tag: 'admin-request',
  styleUrl: 'admin-request.css',
  shadow: true,
})
export class AdminRequest {


  requests: Request[] = []
  books: Book[] = []
  borrows: Borrow[] = []

  async componentWillLoad() {
    // const booksRequested = localStorage.getItem('request');
    const booksRequested = await fetch('http://localhost:8080/request').then(res => res.json())
    // const storedBooks = localStorage.getItem('books');
    const storedBooks = await fetch('http://localhost:8080/books').then(res => res.json())
    // const booksBorrowed = localStorage.getItem('borrow');
    const booksBorrowed = await fetch('http://localhost:8080/borrow').then(res => res.json())
    if (storedBooks) {
      this.books = storedBooks;
    }
    if (booksBorrowed) {
      this.borrows = booksBorrowed
    }
    if (booksRequested) {
      this.requests = booksRequested
      console.log(this.requests);

    }
  }

  // saveToLocalStorage() {
  //   localStorage.setItem("books", JSON.stringify(this.books))
  // }

  

  async borrowBook(id, bookName, name) {
    let noDays = 7
    let dateNow = new Date();
    let condition //to check how many books are still left

    if (id && bookName && noDays) {
      this.books = this.books.map(book => {
        if (book.bookId == id) {
          book.noOfBooks -= 1
          condition = book.noOfBooks //reduced number of books after borrow
        }
        return book
      })
      if (condition > -1) { //checking if all books are borrowed...only if books are available books can be borrowed
        const newBorrow: Borrow = {
          borrowId:null,
          bookId: id,
          clientName: name,
          bookName: bookName,
          days: +noDays,
          borrowDate: dateNow.toISOString().split('T')[0]
        }
        // this.borrows.push(newBorrow)
        await fetch('http://localhost:8080/borrow', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'content-type': 'application/json',
          },
          body: JSON.stringify(newBorrow)
        })

        // this.requests = this.requests.filter(item => item.bookId !== id || item.userName !== name)
        // localStorage.setItem("request", JSON.stringify(this.requests))
        await fetch(`http://localhost:8080/request/${id}`, {
          method: 'DELETE'
        })
        // this.saveToBorrows()
        // this.saveToLocalStorage()
        alert("Requested to Borrow: " + bookName + " for: " + noDays + " days")
      } else {
        alert("book not available")
      }
    }

  }

  async reject(id: number) {
    // this.requests = this.requests.filter(item => item.bookId !== id || item.userName !== name)
    // localStorage.setItem("request",JSON.stringify(this.requests))

    await fetch(`http://localhost:8080/request/${id}`, {
      method: 'DELETE'
    })
    alert("request rejected")
  }

  renderRequests() {
    let heading = <h2>Requests to Borrow</h2>
    return (
      <div class="Booktable">
        <div>
          {heading}
          <table>
            <thead>
              <th>Request Id</th>
              <th>Book Id</th>
              <th>Book Name</th>
              <th>Student Name</th>
              <th>Approve</th>
              <th>Reject</th>
            </thead>
            <tbody>
              {this.requests.map(item => (
                <tr key={item.requestId}>
                  <td>{item.requestId}</td>
                  <td>{item.bookId}</td>
                  <td>{item.bookName}</td>
                  <td>{item.userName}</td>
                  <td><button id='approve' onClick={this.borrowBook.bind(this, item.bookId, item.bookName, item.userName)}>Approve</button></td>
                  <td><button id='reject' onClick={this.reject.bind(this, item.requestId)}>Reject</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  }

  render() {
    return (
      this.renderRequests()
    );
  }

}
