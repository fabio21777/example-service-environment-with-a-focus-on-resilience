package com.fsm.order.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.fsm.order.dto.OrderDto;
import com.fsm.order.dto.ProductDto;
import com.fsm.order.entities.Order;
import com.fsm.order.entities.User;
import com.fsm.order.repositories.OrderRepository;
import com.fsm.order.repositories.ProductRepository;
import com.fsm.order.repositories.UserRepository;
@Service
public class OrderService {
	@Autowired
	private OrderRepository orderRepository;
	@Autowired
	private ProductRepository productRepository;
	@Autowired
	private UserRepository userRepository;
	
	
	@Transactional (readOnly = true)
	public OrderDto findById(Long id) {
		Optional<Order> orderOptional = orderRepository.findById(id);
		System.out.println("USer--->"+orderOptional.get().getUser().getId());
		User user = userRepository.getById(orderOptional.get().getUser().getId());
		OrderDto orderDto = new OrderDto(orderOptional.get(),user);
		orderOptional.get().getProducts().forEach(product -> orderDto.getProducts().add( new ProductDto(productRepository.getById(product.getId()))));
		return orderDto;
	}

}
