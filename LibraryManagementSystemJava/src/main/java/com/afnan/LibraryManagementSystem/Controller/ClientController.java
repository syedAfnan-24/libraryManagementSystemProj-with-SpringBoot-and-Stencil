package com.afnan.LibraryManagementSystem.Controller;

import com.afnan.LibraryManagementSystem.Entity.Client;
import com.afnan.LibraryManagementSystem.Services.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("users")
public class ClientController {
    @Autowired
    private ClientService clientService;

    @PostMapping("signup") //registering a user to data base
    public String addUser(@RequestBody Client client){
        clientService.regUser(client);
        return "SignUp Successful";
    }
    @GetMapping("allUsers") //listing all the registered users
    public List<Client> allUsers(){
        return clientService.showUsers();
    }
    @GetMapping("/{usn}") //displaying a specific user with USN
    public Client findUser(@PathVariable String usn){
        return clientService.findUser(usn);
    }

    @PatchMapping("{usn}") //updating password
    public String changePassword(@PathVariable String usn, @RequestBody String pass){
        Client oldClient = clientService.findUser(usn);
        oldClient.setPassword(pass);
        clientService.regUser(oldClient);
        return "password updated";
    }
    @PatchMapping("/patch/{usn}") //updating password
    public String passwordChange(@RequestParam String usn, @RequestBody String pass){
        Client oldClient = clientService.findUser(usn);
        oldClient.setPassword(pass);
        clientService.regUser(oldClient);
        return "password updated";
    }
}
