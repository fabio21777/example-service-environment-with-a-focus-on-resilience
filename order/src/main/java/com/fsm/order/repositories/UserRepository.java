package com.fsm.order.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fsm.order.entities.User;

public interface UserRepository extends JpaRepository<User,String> {

}
