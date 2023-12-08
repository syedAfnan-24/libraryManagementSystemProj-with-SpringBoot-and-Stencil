import { Component, h } from "@stencil/core";
import { Book } from "../interfaces/book-interface";
import { Borrow } from "../interfaces/borrow-iterface";
import { Return } from "../interfaces/return-interface";
import { Request } from "../interfaces/request-interface";
import { User } from "../interfaces/user-interface";

@Component({
    tag: "client-home",
    styleUrl: "client-home.css",
    shadow: true
})
export class ClientHome {
    //arrays for storing in local storage
    books: Book[] = []
    borrows: Borrow[] = []
    returns: Return[] = []
    requests: Request[] = []
    users: User[] = []

    //variables to display user details
    name
    branch
    inSem
    usn

    async componentWillLoad() {
        //storing/initializing previosly stored values of books and borrows every time component is loaded
        // const storedBooks = localStorage.getItem('books');
        const storedBooks = await fetch('http://localhost:8080/books')
        // const booksBorrowed = localStorage.getItem('borrow')
        const booksBorrowed = await fetch('http://localhost:8080/borrow')
        // const booksReturned = localStorage.getItem('returned');
        const booksReturned = await fetch('http://localhost:8080/returns')
        // const booksRequested = localStorage.getItem('request');
        const booksRequested = await fetch('http://localhost:8080/request')
        // const storedUsers = localStorage.getItem('users')
        const storedUsers = await fetch('http://localhost:8080/users/allUsers')


        if (storedBooks) {
            this.books = await storedBooks.json();
        }
        if (booksBorrowed) {
            this.borrows = await booksBorrowed.json();
            console.log((this.borrows))
        }
        if (booksReturned) {
            this.returns = await booksReturned.json()
            console.log(this.returns);
        }
        if (booksRequested) {
            this.requests = await booksRequested.json()
            console.log(this.requests);
        }
        if (storedUsers) {
            this.users = await storedUsers.json()
        }
    }

    //variables to store user details that are to be displayed
    currentUser = sessionStorage.getItem("currentUser")

    currentUserInfo = this.users.find(user => user.clientName === this.currentUser);


    //I will revisit this function



    async requestBook(id, bookName, name) {
        const request: Request = {
            requestId:null,
            bookId: id,
            bookName: bookName,
            userName: name
        }
        alert("Requested for Book: " + bookName)
        // this.requests.push(request)
        await fetch('http://localhost:8080/request', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'content-type': 'application/json',
            },
            body:JSON.stringify(request)
        })
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


    renderBooks() {

        let headingLOB = <h2>List of books</h2>
        return (
            <div class="Booktable">
                {headingLOB}
                <table>
                    <thead>
                        <th>ID</th>
                        <th>Book Name</th>
                        <th>Author</th>
                        <th>Available</th>
                        <th>Year</th>
                        <th>Request Book</th>
                    </thead>
                    <tbody>
                        {this.books.map(item => (
                            <tr key={item.bookId}>
                                <td>{item.bookId}</td>
                                <td>{item.title}</td>
                                <td>{item.author}</td>
                                <td>{item.noOfBooks}</td>
                                <td>{item.year}</td>
                                <td><button id="borrow-btn" onClick={this.requestBook.bind(this, item.bookId, item.title, this.name)}>Request</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }


    // //renders the books that are returned
    // renderReturns(){
    //     let headingLOB = <h2>List of books Returned</h2>
    //     const filteredReturns: Return[] = this.returns.filter(item => item.username === this.name);

    //     return (
    //         <div class="Booktable">
    //             {headingLOB}
    //             <table>
    //                 <thead>
    //                     <th>ID</th>
    //                     <th>Book Name</th>
    //                     <th>Returned By</th>
    //                     <th>Borrowed Date</th>
    //                     <th>Returned Date</th>
    //                     <th>Fine</th>
    //                 </thead>
    //                 <tbody>
    //                     {filteredReturns.map(item => (
    //                         <tr key={item.id}>
    //                             <td>{item.id}</td>
    //                             <td>{item.bookname}</td>
    //                             <td>{item.username}</td>
    //                             <td>{item.bdate}</td>
    //                             <td>{item.rdate}</td>
    //                             <td>{item.fine}</td>
    //                         </tr>
    //                     ))}
    //                 </tbody>
    //             </table>
    //         </div>)
    // }


    render() {

        let x = this.users.find(user => user.clientName === this.currentUser)
        this.name = x.clientName
        this.branch = x.branch
        this.inSem = x.semester
        this.usn = x.usn
        return (
            <div class="container">
                <h1>Welcome {this.name}</h1>
                <p> <b>Branch</b> {this.branch} <br /> <b>Semester</b> {this.inSem} <br /> <b>USN:</b> {this.usn}</p>

                {this.renderBooks()}
                {/* {this.renderReturns()} */}
            </div>
        )
    }
}