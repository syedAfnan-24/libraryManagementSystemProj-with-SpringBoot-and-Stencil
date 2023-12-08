package com.afnan.LibraryManagementSystem.Entity;

import jakarta.persistence.*;

@Entity
@Table(name="borrowed_books")
public class Borrow {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int borrowId;
    private int bookId;
    private String clientName;
    private String bookName;
    private int days;
    private String borrowDate;

    public Borrow() {
        super();
    }

    public Borrow(int borrowId, int bookId, String clientName, String bookName, int days, String borrowDate) {
        super();
        this.borrowId = borrowId;
        this.bookId = bookId;
        this.clientName = clientName;
        this.bookName = bookName;
        this.days = days;
        this.borrowDate = borrowDate;
    }

    public int getBorrowId() {
        return borrowId;
    }

    public void setBorrowId(int borrowId) {
        this.borrowId = borrowId;
    }

    public int getBookId() {
        return bookId;
    }

    public void setBookId(int bookId) {
        this.bookId = bookId;
    }

    public String getClientName() {
        return clientName;
    }

    public void setClientName(String clientName) {
        this.clientName = clientName;
    }

    public String getBookName() {
        return bookName;
    }

    public void setBookName(String bookName) {
        this.bookName = bookName;
    }

    public int getDays() {
        return days;
    }

    public void setDays(int days) {
        this.days = days;
    }

    public String getBorrowDate() {
        return borrowDate;
    }

    public void setBorrowDate(String borrowDate) {
        this.borrowDate = borrowDate;
    }
}
