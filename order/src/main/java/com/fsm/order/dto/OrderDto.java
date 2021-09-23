package com.fsm.order.dto;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import com.fsm.order.entities.Order;
import com.fsm.order.entities.Product;
import com.fsm.order.entities.User;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class OrderDto {
	private Long id;
	private Integer orderStatus;
	private UserDto user;
	private Set<ProductDto> products = new HashSet<>();
	
	public OrderDto(Order order, User user) {
		this.id = order.getId();
		this.orderStatus = order.getOrderStatus();
		this.user = new UserDto(user);
	}
	public OrderDto(Order order, User user,List<Product> products) {
		this(order,user);
		products.forEach(product ->this.products.add(new ProductDto(product)));
	}
}
