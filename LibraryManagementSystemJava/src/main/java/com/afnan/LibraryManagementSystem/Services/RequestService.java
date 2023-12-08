package com.afnan.LibraryManagementSystem.Services;

import com.afnan.LibraryManagementSystem.Entity.Request;
import com.afnan.LibraryManagementSystem.Repository.RequestRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RequestService {
    @Autowired
    private RequestRepo requestRepo;

    public void requestToBorrow(Request request){
        requestRepo.save(request);
    }
    public void deleteRequest(int id){
        requestRepo.deleteById(id);
    }

    public List<Request> displayRequests(){
        return (List<Request>) requestRepo.findAll();
    }
}
