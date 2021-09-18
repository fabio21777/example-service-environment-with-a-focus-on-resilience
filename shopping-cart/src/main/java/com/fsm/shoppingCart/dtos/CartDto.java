package com.fsm.shoppingCart.dtos;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

import com.fsm.shoppingCart.entities.Cart;
import com.fsm.shoppingCart.externalEntities.Product;
import com.fsm.shoppingCart.externalEntities.User;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class CartDto implements Serializable{
	private static final long serialVersionUID = 1L;
	private String id;
	private UserDto user;
	private Set<ProductDto> products = new HashSet<>();
	
	public CartDto(Cart cart, User user) {
		this.id = cart.getId();
		this.user = new UserDto(user);
	}
	public  CartDto(Cart cart,User user, Set<Product> productsEntity ){
			this(cart,user);
			productsEntity.forEach(x ->this.products.add(new ProductDto(x)));
		
	}
	

}
