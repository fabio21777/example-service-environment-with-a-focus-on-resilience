package com.fsm.credentials.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fsm.credentials.entities.EmailEntities;
import com.fsm.credentials.repositories.EmailRepository;

@Service
public class EmailService {
    @Autowired
    EmailRepository emailRepository;

    public EmailEntities findById(String id) {
        Optional<EmailEntities> email = emailRepository.findById(id);
        return email.get() ;
    }
}
