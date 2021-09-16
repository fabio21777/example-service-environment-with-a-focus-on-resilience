package com.fsm.shoppingCart.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fsm.shoppingCart.entities.Cart;

public interface CartRepositoty extends JpaRepository<Cart,String> {

}
