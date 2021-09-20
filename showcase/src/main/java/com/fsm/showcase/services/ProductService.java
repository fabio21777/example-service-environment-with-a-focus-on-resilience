package com.fsm.showcase.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fsm.showcase.dto.ProductDto;
import com.fsm.showcase.entities.Product;
import com.fsm.showcase.repositories.ProductRepository;

@Service
public class ProductService {
	@Autowired
	ProductRepository productRepository;
	public ProductDto findById(String id) {
		Optional<Product>optionalProductDto = productRepository.findById(id);
		return(new ProductDto(optionalProductDto.get()));
	}
}
