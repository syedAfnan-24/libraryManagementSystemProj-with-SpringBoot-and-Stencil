package com.afnan.LibraryManagementSystem.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="users_list")
public class Client {
    @Id
    private String usn;
    private String clientName;
    private String password;
    private String branch;
    private int semester;
    public Client(String usn, String clientName, String password, String branch, int semester) {
        super();
        this.usn = usn;
        this.clientName = clientName;
        this.password = password;
        this.branch = branch;
        this.semester = semester;
    }
    public Client() {
        super();
    }

    public String getUsn() {
        return usn;
    }

    public void setUsn(String usn) {
        this.usn = usn;
    }

    public String getClientName() {
        return clientName;
    }

    public void setClientName(String clientName) {
        this.clientName = clientName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getBranch() {
        return branch;
    }

    public void setBranch(String branch) {
        this.branch = branch;
    }

    public int getSemester() {
        return semester;
    }

    public void setSemester(int semester) {
        this.semester = semester;
    }
}
