package com.fsm.order.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fsm.order.entities.Order;

public interface OrderRepository extends JpaRepository<Order, Long> {

}
