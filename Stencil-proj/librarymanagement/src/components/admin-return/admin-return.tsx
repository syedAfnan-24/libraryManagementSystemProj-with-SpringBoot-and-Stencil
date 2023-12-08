import { Component, h } from '@stencil/core';
import { Return } from "../interfaces/return-interface";

@Component({
  tag: 'admin-return',
  styleUrl: 'admin-return.css',
  shadow: true,
})
export class AdminReturn {

  returns: Return[] = []

  componentWillLoad() {
    const booksReturned = localStorage.getItem('returned')
    if (booksReturned) {
        this.returns = JSON.parse(booksReturned)
    }
}

  //renders the books that are returned
  renderReturns() {
    let headingLOB = <h2>List of books Returned</h2>
    return <div class="Booktable">
        <div>
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
                        {this.returns.map(item => (
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
            </div>
      </div>
}
  render() {
    return this.renderReturns();
  }

}
