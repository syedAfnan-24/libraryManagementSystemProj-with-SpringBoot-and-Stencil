package com.afnan.LibraryManagementSystem.Controller;

import com.afnan.LibraryManagementSystem.Entity.Book;
import com.afnan.LibraryManagementSystem.Services.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("books")
public class BookController {
    @Autowired
    private BookService bookService;
    @PostMapping //adding a book
    public String enterBook(@RequestBody Book newBook){
        System.out.println("executing");
        bookService.addBook(newBook);
        return "book added";
    }
    @GetMapping("/{id}") //listing books by id
    public Book findbook(@PathVariable int id){
        return bookService.findThisBook(id);
    }
    @GetMapping() //listing all books
    public List<Book> listAllBooks(){
        return bookService.findAllbooks();
    }

    @DeleteMapping("/{id}") //deleting a specific book
    public String deleteBook(@PathVariable int id){
        System.out.println("executing delete");
        bookService.removeBook(id);
        return "book deleted";
    }
    @PatchMapping("/change/{id}") //updating a specific book
    public String editBook(@PathVariable int id, @RequestBody Book updatedBook){
        Book oldBook = bookService.findThisBook(id);
        oldBook.setNoOfBooks(updatedBook.getNoOfBooks());
        oldBook.setAuthor(updatedBook.getAuthor());
        oldBook.setTitle(updatedBook.getTitle());
        oldBook.setYear(updatedBook.getYear());
        bookService.addBook(oldBook);
        return "Book Updated";
    }
}
