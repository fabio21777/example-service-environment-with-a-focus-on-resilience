package com.fsm;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

import com.fsm.entities.Category;
import com.fsm.entities.Product;
import com.fsm.entities.Provider;
import com.fsm.repositories.CategoryRepository;
import com.fsm.repositories.ProductRepository;
import com.fsm.repositories.ProviderRepository;

@Configuration
@Profile("test")
public class TestBase implements CommandLineRunner{
	@Autowired
	CategoryRepository categoryRepository;
	@Autowired
	ProductRepository productRepository;
	@Autowired
	ProviderRepository providerRepository;

    @Override
    public void run(String... args) throws Exception {

    	Category category1 = Category.builder()
    			.id(null)
    			.name("Category1")
    			.build();

    	Category category2 = Category.builder()
    			.id(null)
    			.name("Category2")
    			.build();

    	Category category3 = Category.builder()
    			.id(null)
    			.name("Category3")
    			.build();

    	Category category4 = Category.builder()
    			.id(null)
    			.name("Category4")
    			.build();
    	
    	Category category5 = Category.builder()
    			.id(null)
    			.name("Category5")
    			.build();
    	categoryRepository.saveAll(Arrays.asList(category1,category2,category3,category4,category5));
    	
    	Provider provider1 = Provider.builder()
    			.id(null)
    			.name(" provider1")
    			.description("provem produtos da categoria 1 e categoria 2")
    			.build();
    	Provider provider2 = Provider.builder()
    			.id(null)
    			.name(" provider2")
    			.description("provem produtos da categoria 3 e categoria 3")
    			.build();
    	Provider provider3 = Provider.builder()
    			.id(null)
    			.name(" provider3")
    			.description("provem produtos da categoria 2 e categoria 3")
    			.build();
    	Provider provider4 = Provider.builder()
    			.id(null)
    			.name(" provider4")
    			.description("provem produtos da categoria 4 e categoria 5")
    			.build();
    	Provider provider5 = Provider.builder()
    			.id(null)
    			.name(" provider5")
    			.description("provem produtos da categoria 5 e categoria 1")
    			.build();
    	
    	providerRepository.saveAll(Arrays.asList(provider1,provider2,provider3,provider4,provider5));
    	
    	
    	Product product1 = Product.builder()
    			.id(null)
    			.name("product 1")
    			.description("product 1")
    			.price(1.50)
    			.build();
    	Product product2 = Product.builder()
    			.id(null)
    			.name("product 2")
    			.description("product 2")
    			.price(1.50)
    			.build();
    	Product product3 = Product.builder()
    			.id(null)
    			.name("product 3")
    			.description("product 3")
    			.price(1.50)
    			.build();
    	Product product4 = Product.builder()
    			.id(null)
    			.name("product 4")
    			.description("product 4")
    			.price(1.50)
    			.build();
    	Product product5 = Product.builder()
    			.id(null)
    			.name("product 5")
    			.description("product 5")
    			.price(1.50)
    			.build();
    	productRepository.saveAll(Arrays.asList(product1,product2,product3,product4,product5));
    	
    	product1.getCategories().add(category1);
    	product1.getCategories().add(category2);
    	product2.getCategories().add(category5);
    	product3.getCategories().add(category2);
    	product4.getCategories().add(category3);
    	product5.getCategories().add(category4);
    	
    	product1.getProviders().add(provider1);
    	product1.getProviders().add(provider5);
    	product2.getProviders().add(provider2);
    	product3.getProviders().add(provider3);
    	product4.getProviders().add(provider4);
    	product5.getProviders().add(provider5);
    	
    	productRepository.saveAll(Arrays.asList(product1,product2,product3,product4,product5));
    	
    	
    	
    	

    }
}
