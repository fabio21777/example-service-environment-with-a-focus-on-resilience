package com.fsm.credentials.repositories;
import org.springframework.data.jpa.repository.JpaRepository;

import com.fsm.credentials.entities.User;

public interface UserRepository extends JpaRepository<User, String> {
    
}