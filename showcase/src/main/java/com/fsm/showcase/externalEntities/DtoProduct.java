package com.fsm.showcase.externalEntities;

import java.io.Serializable;

import com.fsm.showcase.entities.Product;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

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
	
	public  DtoProduct(Product product){
		this.id = product.getId();
		this.name = product.getName();
		this.description = product.getDescription();
		this.price = product.getPrice();
	}
	
	

}
