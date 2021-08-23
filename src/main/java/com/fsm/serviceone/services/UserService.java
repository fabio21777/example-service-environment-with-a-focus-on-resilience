package com.fsm.serviceone.services;

import java.util.Optional;

import com.fsm.serviceone.entities.User;
import com.fsm.serviceone.repositories.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    UserRepository userRepository;

    public User findById(String id) {
        Optional<User> user = userRepository.findById(id);
        return user.get() ;
    }
}
