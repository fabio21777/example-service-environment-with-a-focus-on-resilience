package com.fsm.serviceone.repositories;
import com.fsm.serviceone.entities.EmailEntities;

import org.springframework.data.jpa.repository.JpaRepository;

public interface EmailRepository extends JpaRepository <EmailEntities, String> {
    
}