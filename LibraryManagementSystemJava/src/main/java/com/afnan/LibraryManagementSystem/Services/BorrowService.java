package com.afnan.LibraryManagementSystem.Services;

import com.afnan.LibraryManagementSystem.Entity.Borrow;
import com.afnan.LibraryManagementSystem.Repository.BorrowRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BorrowService {
    @Autowired
    private BorrowRepo borrowRepo;

    public void borrowBook(Borrow borrow){
        borrowRepo.save(borrow);
    }
    public void returnBook(int id){
        borrowRepo.deleteById(id);
    }

    public List<Borrow> displayBorrowedBooks(){
        return (List<Borrow>) borrowRepo.findAll();
    }
}
