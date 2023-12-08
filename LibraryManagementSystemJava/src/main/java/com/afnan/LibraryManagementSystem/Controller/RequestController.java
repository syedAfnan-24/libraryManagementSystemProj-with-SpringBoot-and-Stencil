package com.afnan.LibraryManagementSystem.Controller;

import com.afnan.LibraryManagementSystem.Entity.Request;
import com.afnan.LibraryManagementSystem.Services.RequestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("request")
public class RequestController {
    @Autowired
    private RequestService requestService;

    @PostMapping
    public String requestBook(@RequestBody Request request){
        requestService.requestToBorrow(request);
        return "requested to borrow the book";
    }
    @DeleteMapping("/{id}")
    public String removeRequest(@PathVariable int id){
        requestService.deleteRequest(id);
        return "request removed";
    }
    @GetMapping
    public List<Request> displayRequests(){
        return (List<Request>)requestService.displayRequests();
    }
}
