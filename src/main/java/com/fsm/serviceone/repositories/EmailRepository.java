package com.fsm.serviceone.repositories;
import com.fsm.serviceone.entities.Email;

import org.springframework.data.jpa.repository.JpaRepository;

public interface EmailRepository extends JpaRepository <Email, String> {
    
}