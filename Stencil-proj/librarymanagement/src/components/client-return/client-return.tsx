import { Component, h } from '@stencil/core';
import { Return } from "../interfaces/return-interface";

@Component({
  tag: 'client-return',
  styleUrl: 'client-return.css',
  shadow: true,
})
export class ClientReturn {
  name = sessionStorage.getItem("currentUser")

  returns: Return[] = []

  componentWillLoad() {
    //storing/initializing previosly stored values of books and borrows every time component is loaded
    const booksReturned = localStorage.getItem('returned')
    if (booksReturned) {
        this.returns = JSON.parse(booksReturned)
    }
}
  //renders the books that are returned
  renderReturns(){
    let headingLOB = <h2>List of books Returned</h2>
    const filteredReturns: Return[] = this.returns.filter(item => item.username === this.name);
    
    return (
        <div class="Booktable">
            {headingLOB}
            <table>
                <thead>
                    <th>ID</th>
                    <th>Book Name</th>
                    <th>Returned By</th>
                    <th>Borrowed Date</th>
                    <th>Returned Date</th>
                    <th>Fine</th>
                </thead>
                <tbody>
                    {filteredReturns.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.bookname}</td>
                            <td>{item.username}</td>
                            <td>{item.bdate}</td>
                            <td>{item.rdate}</td>
                            <td>{item.fine}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>)
}

  render() {
    return <div class="container">
      {this.renderReturns()}
    </div>
  }

}
