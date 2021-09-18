package com.fsm.shoppingCart.dtos;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fsm.shoppingCart.entities.Cart;
import com.fsm.shoppingCart.externalEntities.Product;
import com.fsm.shoppingCart.externalEntities.User;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;


@Getter
@AllArgsConstructor
@NoArgsConstructor
public class ProductDto implements Serializable{
	private static final long serialVersionUID = 1L;
	private String id;
	private String name;
	private Double price;
	@JsonIgnore
	private Set<CartDto> carts = new HashSet<>(); 
	
	public ProductDto(Product product) {
		this.id = product.getId();
		this.name = product.getName();
		this.price = product.getPrice();
	}
	public ProductDto(Product product, User user,Set<Cart> carts ) {
		this(product);
		carts.forEach(cart ->this.carts.add(new CartDto(cart, user)));
	}
	
}
