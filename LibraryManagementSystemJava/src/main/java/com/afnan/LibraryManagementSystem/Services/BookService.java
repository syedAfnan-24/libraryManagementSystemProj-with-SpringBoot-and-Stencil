package com.afnan.LibraryManagementSystem.Services;

import com.afnan.LibraryManagementSystem.Entity.Book;
import com.afnan.LibraryManagementSystem.Repository.BookRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookService {
    @Autowired
    private BookRepo bookRepo;

    public void addBook(Book newBook){
        bookRepo.save(newBook);
    }
    public Book findThisBook(int id){
        return bookRepo.findByBookId(id);
    }
    public List<Book> findAllbooks(){
        return (List<Book>) bookRepo.findAll();
    }
    public void removeBook(int id){
        bookRepo.deleteById(id);
    }
}
