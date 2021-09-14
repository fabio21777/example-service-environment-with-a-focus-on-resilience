package com.fsm.repositories;
import org.springframework.data.jpa.repository.JpaRepository;

import com.fsm.entities.Provider;

public interface ProviderRepository extends JpaRepository<Provider, String> {
    
}