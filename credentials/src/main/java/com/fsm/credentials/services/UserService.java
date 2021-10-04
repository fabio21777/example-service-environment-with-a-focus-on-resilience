package com.fsm.credentials.services;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fsm.credentials.dto.DtoUser;
import com.fsm.credentials.entities.EmailEntities;
import com.fsm.credentials.entities.User;
import com.fsm.credentials.repositories.EmailRepository;
import com.fsm.credentials.repositories.UserRepository;

@Service
public class UserService {
    @Autowired
    UserRepository userRepository;
    @Autowired
    EmailRepository emailRepository;

    public DtoUser findById(String id) {
    	Set<EmailEntities>emailsEntities = new HashSet<>();
        Optional<User> user = userRepository.findById(id);
        user.get().getEmails().forEach(email -> emailsEntities.add(emailRepository.getById(email.getId())));
        return  new DtoUser(user.get(), emailsEntities);
    }
    
    public List<User>findAll(){
    	return userRepository.findAll();
    }
    
    public User insert(User user) {
    	return userRepository.save(user);
    }
}
