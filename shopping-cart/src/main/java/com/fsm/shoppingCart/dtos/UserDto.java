package com.fsm.shoppingCart.dtos;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fsm.shoppingCart.entities.Cart;
import com.fsm.shoppingCart.externalEntities.User;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UserDto implements Serializable{
	private static final long serialVersionUID = 1L;
	private String id;
	private String name;
	@JsonIgnore
	private CartDto cart;
	
	public UserDto(User user){
		this.id = user.getId();
		this.name = user.getName();
	}
	
	UserDto(User user, Cart cart ){
		this(user);
		this.cart = new CartDto(cart, user);
	}
	
}
