package com.afnan.LibraryManagementSystem.Entity;

import jakarta.persistence.*;

@Entity
@Table(name="returned_books") public class Returns {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) private int returnId;
    private int bookId;
    private String bookName;
    private String userName;
    private String borrowDate;
    private String returnDate;
    private int fine;

    public Returns(int bookId, String bookName, String userName, String borrowDate, String returnDate, int fine) {
        super();
        this.bookId = bookId;
        this.bookName = bookName;
        this.userName = userName;
        this.borrowDate = borrowDate;
        this.returnDate = returnDate;
        this.fine = fine;
    }

    public Returns() {
        super();
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

    public String getBorrowDate() {
        return borrowDate;
    }

    public void setBorrowDate(String borrowDate) {
        this.borrowDate = borrowDate;
    }

    public String getReturnDate() {
        return returnDate;
    }

    public void setReturnDate(String returnDate) {
        this.returnDate = returnDate;
    }

    public int getFine() {
        return fine;
    }

    public void setFine(int fine) {
        this.fine = fine;
    }
}
