package com.fsm.shoppingCart.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fsm.shoppingCart.externalEntities.User;

public interface UserRepositoty extends JpaRepository<User,String> {

}
