package com.fsm.serviceone.entities;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class User implements Serializable {
    private static final long serialVersionUID = 1L;
    @Id
    private String id;
    private String username;
    private String password;
    @JsonIgnore
    @OneToMany(mappedBy = "user")
    private Set<Email>emails = new HashSet<>();
    
    public User() {
    }

    public User(String id, String username,String password, Set<Email> emails) {
        this.id = id;
        this.username = username;
        this.emails = emails;
        this.password = password;
    }

    public String getId() {
        return id;
    }

    public String getUsername() {
        return username;
    }

    
    public String getPassword() {
        return password;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public Set<Email> getEmails() {
        return emails;
    }
    
    
}