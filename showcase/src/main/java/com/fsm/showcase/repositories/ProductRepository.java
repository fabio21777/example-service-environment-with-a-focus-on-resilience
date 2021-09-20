package com.fsm.showcase.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fsm.showcase.entities.Product;

public interface ProductRepository extends JpaRepository<Product, String> {

}
