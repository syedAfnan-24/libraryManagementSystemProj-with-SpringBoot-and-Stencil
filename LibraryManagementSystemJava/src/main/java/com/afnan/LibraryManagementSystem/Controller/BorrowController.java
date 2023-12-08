package com.afnan.LibraryManagementSystem.Controller;

import com.afnan.LibraryManagementSystem.Entity.Borrow;
import com.afnan.LibraryManagementSystem.Services.BorrowService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("borrow")
public class BorrowController {
    @Autowired
    private BorrowService borrowService;

    @PostMapping //add to borrowed books
    public String borrowBook(@RequestBody Borrow borrow){
        borrowService.borrowBook(borrow);
        return "Book Borrowed";
    }
    @GetMapping //check the list of all books borrowed
    public List<Borrow> displayBorrows(){
        return borrowService.displayBorrowedBooks();
    }
    @DeleteMapping("/{id}") //remove a specific book from borrows
    public String returnBook(@PathVariable int id){
        borrowService.returnBook(id);
        return "book return";
    }
}
