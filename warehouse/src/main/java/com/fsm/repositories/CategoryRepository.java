package com.fsm.repositories;
import org.springframework.data.jpa.repository.JpaRepository;

import com.fsm.entities.Category;

public interface CategoryRepository extends JpaRepository<Category, String> {
    
}