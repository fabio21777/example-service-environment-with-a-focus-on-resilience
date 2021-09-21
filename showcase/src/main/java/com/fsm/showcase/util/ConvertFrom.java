package com.fsm.showcase.util;

import org.springframework.stereotype.Service;

import com.fsm.showcase.dto.ProductDto;
import com.fsm.showcase.entities.Product;

@Service
public class ConvertFrom {
	public  static ProductDto productToDto(Product productEntity) {
		ProductDto productDto = new ProductDto();
		productDto.setId(productEntity.getId()); 
		productDto.setName(productEntity.getName());
		productDto.setDescription(productEntity.getDescription());
		productDto.setPrice(productEntity.getPrice()); 
		productDto.setUrlImg(productEntity.getUrlImg());
		return productDto;
	}
	public static Product dtoToProduct(ProductDto productDto) {
		return null;
	}
		
	
}
