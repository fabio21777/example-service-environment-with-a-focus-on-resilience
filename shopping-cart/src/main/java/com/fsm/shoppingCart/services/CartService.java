package com.fsm.shoppingCart.services;

import java.util.Optional;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.fsm.shoppingCart.dtos.CartDto;
import com.fsm.shoppingCart.dtos.ProductDto;
import com.fsm.shoppingCart.entities.Cart;
import com.fsm.shoppingCart.externalEntities.Product;
import com.fsm.shoppingCart.externalEntities.User;
import com.fsm.shoppingCart.repositories.CartRepositoty;
import com.fsm.shoppingCart.repositories.ProductRepositoty;
import com.fsm.shoppingCart.repositories.UserRepositoty;

@Service
public class CartService {
	@Autowired
	CartRepositoty cartRepositoty;
	@Autowired
	UserRepositoty userRepositoty;
	@Autowired
	ProductRepositoty productRepositoty;
	
	
	@Transactional (readOnly = true)
	public CartDto findById(String id) {
		System.out.println("aqui é o cartFindById");
		Optional<Cart>cartFindById = cartRepositoty.findById(id);
		
		User user = userRepositoty.getById(cartFindById.get().getUser().getId());
		CartDto cartDto = new CartDto(cartFindById.get(),user);
		for (Product productEntity : cartFindById.get().getProducts()) {
			ProductDto productDto = new ProductDto(productRepositoty.getById(productEntity.getId()));
			cartDto.getProducts().add(productDto);		
		}
		
		return cartDto;
	}
	
}
