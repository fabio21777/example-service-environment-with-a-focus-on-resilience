package com.fsm.order.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fsm.order.entities.Product;

public interface ProductRepository extends JpaRepository<Product, String> {

}
