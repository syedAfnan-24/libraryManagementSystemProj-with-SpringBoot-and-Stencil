import { Component, h, Element, State } from "@stencil/core";
import { Book } from "../interfaces/book-interface";

@Component({
    tag: "admin-home",
    styleUrl: "admin-home.css",
    shadow: true
})
export class AdminHome {
    //input elements
    @Element() el: HTMLElement
    bookname: HTMLInputElement
    authorname: HTMLInputElement
    year: HTMLInputElement
    numberdays: HTMLInputElement

    @State() borrowListState: boolean = false
    @State() returnListState: boolean = false



    //array initialization and declaration

    books: Book[] = []
    // returns: Return[] = []

    async componentWillLoad() {
        // const storedBooks = localStorage.getItem('books');
        // const storedBooks = await fetch("http://localhost:8080/users/allUsers").then(res => res.json());
        const storedBooks = await fetch("http://localhost:8080/books");

        if (storedBooks) {
            // this.books = JSON.parse(storedBooks);
            this.books = await storedBooks.json();
            // console.log(this.books)
        }
    }

    greetAdmin: string = sessionStorage.getItem("admin")

    //adding book
    handleForm() {
        const bookName: string = this.bookname.value
        const authorName: string = this.authorname.value
        const year: number = +this.year.value
        const amt: number = +this.numberdays.value
        if (bookName && authorName && year && amt > 0) {
            const newBook: Book = {
                bookId: null,
                title: bookName,
                author: authorName,
                noOfBooks: amt,
                year: +year
            }
            // this.books.push(newBook)
            // console.log(this.books)
            this.saveToLocalStorage(newBook)
        }
    }
    async saveToLocalStorage(newBook) {
        // localStorage.setItem("books", JSON.stringify(this.books))
        await fetch('http://localhost:8080/books', {
            method: 'POST',
            body: JSON.stringify(newBook),
            headers: {
                'Accept': 'application/json',
                'content-type': 'application/json',
            }
        });

    }
    async deleteBook(id: number) {
        // let deleteID: number = +prompt("enter the id of book to delete")
        // this.books = this.books.filter(book => book.bookId !== id)
        // this.saveToLocalStorage()
        await fetch(`http://localhost:8080/books/${id}`,{
            method:'DELETE'
        })
        this.renderBooks()
        alert("book deleted")
        location.reload()
    }
    async editBook(id: number) {
        const editTitle = prompt("enter Book Title")
        const editAuthor = prompt("enter Author name")
        const editYear: number = +prompt("enter year of publication")
        const nobooks: number = +prompt("Enter the number of books")

        if (editAuthor && editTitle && editYear && nobooks) {
            let updatedBook:Book={
                bookId:null,
                author:editAuthor,
                title:editTitle,
                noOfBooks:nobooks,
                year:editYear
            }
            await fetch(`http://localhost:8080/books/change/${id}`,{
                method:'PATCH',
                headers: {
                    'Accept': 'application/json',
                    'content-type': 'application/json',
                },
                body:JSON.stringify(updatedBook)
            })
            location.reload()
            this.renderBooks()
        }
    }

    renderBooks() {
        let heading = <h2>Books List</h2>
        return (
            <div class="Booktable">
                <div>
                    {heading}
                    <table>
                        <thead>
                            <th>ID</th>
                            <th>Book Name</th>
                            <th>Available Books</th>
                            <th>Author</th>
                            <th>Year</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </thead>
                        <tbody>
                            {this.books.map(item => (
                                <tr key={item.bookId}>
                                    <td>{item.bookId}</td>
                                    <td>{item.title}</td>
                                    <td>{item.noOfBooks}</td>
                                    <td>{item.author}</td>
                                    <td>{item.year}</td>
                                    <td><button id="edit-btn" onClick={this.editBook.bind(this, item.bookId)}>edit</button></td>
                                    <td><button id="delete-btn" onClick={this.deleteBook.bind(this, item.bookId)}>delete</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        )

    }


    render() {

        let BookForm = (
            <div>
                <h1>hello {this.greetAdmin}</h1>
                <form onSubmit={this.handleForm.bind(this)}>
                    <label htmlFor="bookname">Name of Book</label>
                    <input type="text" id="bookname" ref={el => { this.bookname = el }} placeholder="Enter the Book Name" required />

                    <label htmlFor="authorname">Author Name</label>
                    <input type="text" id="authorname" ref={el => { this.authorname = el }} placeholder="Enter the Author Name" required />

                    <label htmlFor="amount">No Of Books</label>
                    <input type="number" id="amount" ref={el => { this.numberdays = el }} placeholder="Enter the number of books available" required />

                    <label htmlFor="year">Year of Publish</label>
                    <input type="number" id="year" ref={el => { this.year = el }} placeholder="Enter year of publication" required />

                    <button type="submit">Add Book</button>
                </form>

            </div>
        )
        return <div class="container">

            {BookForm}

            <div>
                {this.renderBooks()}
            </div>
        </div>
    }
}