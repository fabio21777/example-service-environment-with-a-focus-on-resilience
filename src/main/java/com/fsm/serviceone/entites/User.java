package com.fsm.serviceone.entites;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;


public class User implements Serializable {
    private static final long serialVersionUID = 1L;
    private String id;
    private String username;
    private Set<Email>emails = new HashSet<>();
    
    public User() {
    }

    public User(String id, String username, Set<Email> emails) {
        this.id = id;
        this.username = username;
        this.emails = emails;
    }

    public String getId() {
        return id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public Set<Email> getEmails() {
        return emails;
    }
    
    
}