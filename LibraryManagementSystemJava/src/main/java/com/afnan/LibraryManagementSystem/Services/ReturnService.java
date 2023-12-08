package com.afnan.LibraryManagementSystem.Services;

import com.afnan.LibraryManagementSystem.Entity.Returns;
import com.afnan.LibraryManagementSystem.Repository.ReturnsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReturnService {
    @Autowired
    private ReturnsRepo returnsRepo;

    public void addToReturn(Returns returns){
        returnsRepo.save(returns);
    }
    public List<Returns> displayReturns(){
        return (List<Returns>)returnsRepo.findAll();
    }
}
