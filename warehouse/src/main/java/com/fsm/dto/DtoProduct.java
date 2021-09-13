package com.fsm.dto;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

import com.fsm.entities.Category;
import com.fsm.entities.Product;
import com.fsm.entities.Provider;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;
import lombok.Builder.Default;

@Builder(toBuilder = true)
@Getter
@ToString
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@AllArgsConstructor(access = AccessLevel.PACKAGE)
@NoArgsConstructor(access = AccessLevel.PACKAGE)
public class DtoProduct  implements Serializable{
	private static final long serialVersionUID = 1L;
	
	private String id;
	private String name;
	private String description;
	private Double price;
	@Default
	private Set<Category> categories = new HashSet<>();
	@Default
	private Set<Provider> providers = new HashSet<>();
	
	public  DtoProduct(Product product){
		this.id = product.getId();
		this.name = product.getName();
		this.description = product.getDescription();
		this.price = product.getPrice();
		this.categories = product.getCategories();
		this.providers = product.getProviders();
	}
	
	

}
