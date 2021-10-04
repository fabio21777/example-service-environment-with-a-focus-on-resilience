package com.fsm.order.dto;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fsm.order.entities.Order;
import com.fsm.order.entities.Product;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ProductDto implements Serializable{
	private static final long serialVersionUID = 1L;
	private String id;
	private String name;
	private Double price;
	private String urlImg;
	@Setter(value = AccessLevel.NONE)
	@JsonIgnore
	private Set<OrderDto> orders = new HashSet<>();
	
	public ProductDto(Product product) {
		this.id = product.getId();
		this.name = product.getName();
		this.price = product.getPrice();
		this.urlImg = product.getUrlImg();
	}
	
	public ProductDto(Product product, Set<Order> orders) {
		this(product);
		orders.forEach(order -> this.orders.add(new OrderDto(order, order.getUser())));;
	}
}
