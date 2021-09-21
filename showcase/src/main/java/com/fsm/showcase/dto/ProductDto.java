package com.fsm.showcase.dto;

import java.io.Serializable;

import com.fsm.showcase.entities.Product;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
public class ProductDto  implements Serializable{
	private static final long serialVersionUID = 1L;
	private String id;
	private String name;
	private String description;
	private Double price;
	private String UrlImg;
	

}
