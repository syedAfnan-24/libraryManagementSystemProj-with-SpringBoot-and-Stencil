package com.afnan.LibraryManagementSystem.Entity;

import jakarta.persistence.*;

@Entity
@Table(name="requests_list")
public class Request {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int requestId;
    private int bookId;
    private String bookName;
    private String userName;

    public Request(int requestId, int bookId, String bookName, String userName) {
        super();
        this.requestId = requestId;
        this.bookId = bookId;
        this.bookName = bookName;
        this.userName = userName;
    }

    public Request() {
        super();
    }

    public int getRequestId() {
        return requestId;
    }

    public void setRequestId(int requestId) {
        this.requestId = requestId;
    }

    public int getBookId() {
        return bookId;
    }

    public void setBookId(int bookId) {
        this.bookId = bookId;
    }

    public String getBookName() {
        return bookName;
    }

    public void setBookName(String bookName) {
        this.bookName = bookName;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }
}
