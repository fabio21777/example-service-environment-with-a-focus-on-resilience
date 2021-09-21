package com.fsm.showcase.services;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fsm.showcase.dto.ProductDto;
import com.fsm.showcase.entities.Product;
import com.fsm.showcase.repositories.ProductRepository;
import com.fsm.showcase.util.ConvertFrom;

@Service
public class ProductService {
	@Autowired
	ProductRepository productRepository;
	
	public ProductDto findById(String id) {
		Optional<Product>optionalProduct = productRepository.findById(id);
		return(ConvertFrom.productToDto(optionalProduct.get()));
	}
	
	public List<ProductDto> findAll(){
		List<Product> listProduct = productRepository.findAll();
		return listProduct.stream().map(x ->ConvertFrom.productToDto(x)).collect(Collectors.toList());
	}
	
	
}
