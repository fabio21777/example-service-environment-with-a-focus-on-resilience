package com.fsm.credentials.repositories;
import org.springframework.data.jpa.repository.JpaRepository;

import com.fsm.credentials.entities.EmailEntities;

public interface EmailRepository extends JpaRepository <EmailEntities, String> {
    
}