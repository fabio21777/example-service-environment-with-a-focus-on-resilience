package com.fsm.credentials.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fsm.credentials.entities.User;
import com.fsm.credentials.repositories.UserRepository;

@Service
public class UserService {
    @Autowired
    UserRepository userRepository;

    public User findById(String id) {
        Optional<User> user = userRepository.findById(id);
        return user.get() ;
    }
    
    public List<User>findAll(){
    	return userRepository.findAll();
    }
    
    public User insert(User user) {
    	return userRepository.save(user);
    }
}
