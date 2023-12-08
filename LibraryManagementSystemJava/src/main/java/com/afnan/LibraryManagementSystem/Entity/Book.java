package com.afnan.LibraryManagementSystem.Entity;

import jakarta.persistence.*;

@Entity
@Table(name = "books_list")
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int bookId;
    private String title;
    private String author;
    private int noOfBooks;
    private int year;

    public Book(int bookId, String title, String author, int noOfBooks, int year) {
        super();
        this.bookId = bookId;
        this.title = title;
        this.author = author;
        this.noOfBooks = noOfBooks;
        this.year = year;
    }

    public Book() {
        super();
    }

    public int getBookId() {
        return bookId;
    }

    public void setBookId(int bookId) {
        this.bookId = bookId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public int getNoOfBooks() {
        return noOfBooks;
    }

    public void setNoOfBooks(int noOfBooks) {
        this.noOfBooks = noOfBooks;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }
}
