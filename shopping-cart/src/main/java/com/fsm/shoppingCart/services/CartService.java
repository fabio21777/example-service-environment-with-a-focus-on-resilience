package com.fsm.shoppingCart.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
	public CartDto findById(String id) {
		
		Optional<Cart>cartFindById = cartRepositoty.findById(id);
		Optional<User> user = userRepositoty.findById(cartFindById.get().getUser().getId());
		CartDto cartDto = new CartDto(cartFindById.get(),user.get());
		for (Product productEntity : cartFindById.get().getProducts()) {
			ProductDto productDto = new ProductDto(productRepositoty.getById(productEntity.getId()));
			cartDto.getProducts().add(productDto);		
		}
		
		return null;
	}
	
	/*private void copyDtoToEntity(ProductDto dto, Product entity) {
		entity.setName(dto.getName());
		entity.setDescription(dto.getDescription());
		entity.setDate(dto.getDate());
		entity.setImgUrl(dto.getImgUrl());
		entity.setPrice(dto.getPrice());
		entity.getCategories().clear();
		for (CategoryDto catDto : dto.getCategories()) {
			Category category = categoryRepository.getOne(catDto.getId());
			entity.getCategories().add(category);			
		}*/
}
