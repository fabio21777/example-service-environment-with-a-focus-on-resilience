package com.fsm.repositories;
import org.springframework.data.jpa.repository.JpaRepository;
import com.fsm.entities.Product;

public interface ProductRepository extends JpaRepository<Product, String> {
    
}