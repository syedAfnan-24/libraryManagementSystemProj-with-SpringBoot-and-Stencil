package com.afnan.LibraryManagementSystem.Controller;

import com.afnan.LibraryManagementSystem.Entity.Returns;
import com.afnan.LibraryManagementSystem.Services.ReturnService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("returns")
public class ReturnController {
    @Autowired
    private ReturnService returnService;

    @PostMapping
    public String addToReturns(@RequestBody Returns returns){
        returnService.addToReturn(returns);
        return "book added to returns";
    }
    @GetMapping
    public List<Returns> displayReturns(){
        return returnService.displayReturns();
    }
}
