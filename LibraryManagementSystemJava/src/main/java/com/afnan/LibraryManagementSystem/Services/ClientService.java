package com.afnan.LibraryManagementSystem.Services;

import com.afnan.LibraryManagementSystem.Entity.Client;
import com.afnan.LibraryManagementSystem.Repository.ClientRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Service
public class ClientService {
    @Autowired
    private ClientRepo clientRepo;

    public void regUser(Client client){
        clientRepo.save(client);
    }
    public List<Client> showUsers(){
        return (List<Client>) clientRepo.findAll();
    }
    public Client findUser(String usn){
        return clientRepo.findByUsn(usn);
    }
}
