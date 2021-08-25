package com.fsm.serviceone.services;

import java.util.Optional;

import com.fsm.serviceone.entities.EmailEntities;
import com.fsm.serviceone.repositories.EmailRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmailService {
    @Autowired
    EmailRepository emailRepository;

    public EmailEntities findById(String id) {
        Optional<EmailEntities> email = emailRepository.findById(id);
        return email.get() ;
    }
}
