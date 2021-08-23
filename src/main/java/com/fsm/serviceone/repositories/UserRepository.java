package com.fsm.serviceone.repositories;
import com.fsm.serviceone.entities.User;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, String> {
    
}