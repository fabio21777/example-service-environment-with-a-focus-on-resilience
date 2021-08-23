package com.fsm.serviceone.services;

import java.util.Optional;

import com.fsm.serviceone.entities.Email;
import com.fsm.serviceone.repositories.EmailRepository;

import org.springframework.beans.factory.annotation.Autowired;

public class EmailService {
    @Autowired
    EmailRepository emailRepository;

    public Email findById(String id) {
        Optional<Email> user = emailRepository.findById(id);
        return user.get() ;
    }
}
