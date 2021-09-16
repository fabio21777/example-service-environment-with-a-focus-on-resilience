package com.fsm.shoppingCart.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fsm.shoppingCart.externalEntities.Product;

public interface ProductRepositoty extends JpaRepository< Product,String> {
	
}
