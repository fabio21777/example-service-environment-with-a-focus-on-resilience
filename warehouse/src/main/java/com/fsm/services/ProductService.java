package com.fsm.services;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fsm.dto.DtoProduct;
import com.fsm.entities.Product;
import com.fsm.repositories.ProductRepository;

	

@Service
public class ProductService {
	@Autowired
	private ProductRepository productRepository ;
	
	public DtoProduct findById(String id) {
		Optional<Product> product = productRepository.findById(id);
		
		
		return (DtoProduct.builder()
				.id(product.get().getId())
				.name(product.get().getName())
				.description(product.get().getDescription())
				.price(product.get().getPrice())
				.categories(product.get().getCategories())
				.providers(product.get().getProviders())
				.build()
				);
	}
	public List<DtoProduct> findAll() {
		List<Product> products = productRepository.findAll();
		List<DtoProduct>dtoProducts = products.stream().map(x -> new DtoProduct(x)).collect(Collectors.toList());
		return dtoProducts;
	}
	
	
}
