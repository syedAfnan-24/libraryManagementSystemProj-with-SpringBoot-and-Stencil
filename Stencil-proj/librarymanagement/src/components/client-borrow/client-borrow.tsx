import { Component, h } from '@stencil/core';
import { Borrow } from "../interfaces/borrow-iterface";
import { Return } from "../interfaces/return-interface";
import { Book } from "../interfaces/book-interface";

@Component({
  tag: 'client-borrow',
  styleUrl: 'client-borrow.css',
  shadow: true,
})
export class ClientBorrow {
  name = sessionStorage.getItem("currentUser")
  books: Book[] = []
  borrows: Borrow[] = []
  returns: Return[] = []


  componentWillLoad() {
    //storing/initializing previosly stored values of books and borrows every time component is loaded
    const storedBooks = localStorage.getItem('books');
    const booksBorrowed = localStorage.getItem('borrow')
    const booksReturned = localStorage.getItem('returned')
    if (storedBooks) {
      this.books = JSON.parse(storedBooks);
    }
    if (booksBorrowed) {
      this.borrows = JSON.parse(booksBorrowed)
    }
    if (booksReturned) {
      this.returns = JSON.parse(booksReturned)
    }
  }

  getDiff(borrowdate: string, returndate: string) {
    // Convert the dates to Date objects
    const startDate = new Date(borrowdate);
    const endDate = new Date(returndate);

    // Calculate the time difference in milliseconds
    const timeDifference = endDate.getTime() - startDate.getTime();

    // Convert the time difference from milliseconds to days
    const daysDifference = timeDifference / (1000 * 60 * 60 * 24);

    // Return the absolute value of the difference to handle cases where returnDate is before borrowDate
    return Math.abs(daysDifference);
  }

  //i'll revisit this code
  returnBook(id, bookname, borrowdate) {
    let returndate = prompt("enter the return Date in yyyy-mm-dd format")
    let fine = 0

    if (id && bookname && borrowdate && returndate) {
      let days = this.getDiff(borrowdate, returndate)
      this.books = this.books.map(book => {
        if (book.bookId == id) {
          book.noOfBooks += 1
        }
        return book
      })
      if (days > 7) {
        fine = (days - 7) * 5
      } else {
        fine = 0
      }
      const newReturn: Return = {
        id: id,
        bookname: bookname,
        username: this.name,
        bdate: borrowdate,
        rdate: returndate,
        fine: fine
      }
      this.saveToLocalStorage()
      this.returns.push(newReturn)
      this.saveToReturns()
      this.borrows = this.borrows.filter(item => item.borrowId !== id || item.clientName !== this.name)
      this.saveToBorrows()
      if(fine==0){
        alert("book:\'"+bookname+"\'returned on time");
      }else{
        alert("book:\'"+bookname+"\'returned with due of "+(days-7)+", fine: Rs."+fine)
      }
    }

  }
  saveToBorrows() {
    localStorage.setItem("borrow", JSON.stringify(this.borrows))
  }
  saveToReturns() {
    localStorage.setItem("returned", JSON.stringify(this.returns))
  }
  saveToLocalStorage() {
    localStorage.setItem("books", JSON.stringify(this.books))
  }

  renderBorrow() {
    let headingLOB = <h2>List of books Borrowed</h2>
    const filteredBorrows: Borrow[] = this.borrows.filter(item => item.clientName === this.name);

    return (
      <div class="container">
        <div class="Booktable">
        {headingLOB}
        <table>
          <thead>
            <th>Borrow ID</th>
            <th>Book ID</th>
            <th>Book Name</th>
            <th>Borrowed By</th>
            <th>For No. days</th>
            <th>Date</th>
            <th>Return</th>
          </thead>
          <tbody>
            {filteredBorrows.map(item => (
              <tr key={item.borrowId}>
                <td>{item.borrowId}</td>
                <td>{item.bookId}</td>
                <td>{item.bookName}</td>
                <td>{item.clientName}</td>
                <td>{item.days}</td>
                <td>{item.borrowDate}</td>
                <td><button id="borrow-btn" onClick={this.returnBook.bind(this, item.borrowId, item.bookName, item.borrowDate)}>Return</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
      )
  }
  render() {
    return this.renderBorrow()
  }

}
