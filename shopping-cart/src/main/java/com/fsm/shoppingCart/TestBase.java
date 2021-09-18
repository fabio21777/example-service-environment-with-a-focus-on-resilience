package com.fsm.shoppingCart;

import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;

import com.fsm.shoppingCart.entities.Cart;
import com.fsm.shoppingCart.externalEntities.Product;
import com.fsm.shoppingCart.externalEntities.User;
import com.fsm.shoppingCart.repositories.CartRepositoty;
import com.fsm.shoppingCart.repositories.ProductRepositoty;
import com.fsm.shoppingCart.repositories.UserRepositoty;

@Configuration
@Profile("test")
public class TestBase implements CommandLineRunner{
    @Autowired
    CartRepositoty cartRepositoty;
    @Autowired
    UserRepositoty userRepositoty;
    @Autowired
    ProductRepositoty productRepositoty;
    
    
    @Override
    public void run(String... args) throws Exception {

    	Product product1 = Product.builder()
    			.id(null)
    			.name("TV 100 polegadas")
    			.price(50.000)
    			.build();
    	Product product2 = Product.builder()
    			.id(null)
    			.name("PS7")
    			.price(10.000)
    			.build();
    	Product product3 = Product.builder()
    			.id(null)
    			.name("PC GAME")
    			.price(150.000)
    			.build();
    	Product product4 = Product.builder()
    			.id(null)
    			.name("PLACA GRAFICA ")
    			.price(80.000)
    			.build();
    	Product product5 = Product.builder()
    			.id(null)
    			.name("CPU")
    			.price(20.000)
    			.build();
    	productRepositoty.saveAll(Arrays.asList(product1,product2,product3,product4,product5));
    	
    	User user1 = User.builder()
    			.id(null)
    			.name("Fabio Souza")
    			.build();
    	User user2 = User.builder()
    			.id(null)
    			.name("Maria Santos")
    			.build();
    	User user3 = User.builder()
    			.id(null)
    			.name("Clara Silva")
    			.build();
    	User user4 = User.builder()
    			.id(null)
    			.name("David Araujo")
    			.build();
    	User user5 = User.builder()
    			.id(null)
    			.name("Joao Pereira")
    			.build();
    	
    	userRepositoty.saveAll(Arrays.asList(user1,user2,user3,user4,user5));
    	
    	
    	Cart cart1 = new  Cart();
    	cart1.setId(null);
    	cart1.setUser(user1);
    	cart1.getProducts().add(product1);
    	
    	Cart cart2 = new  Cart();
    	cart1.setId(null);
    	cart1.setUser(user2);
    	cart1.getProducts().add(product2);
    	
    	Cart cart3 = new  Cart();
    	cart1.setId(null);
    	cart1.setUser(user3);
    	cart1.getProducts().addAll(Arrays.asList(product1,product2,product3,product4));
    	
    	Cart cart4 = new  Cart();
    	cart1.setId(null);
    	cart1.setUser(user4);
    	cart1.getProducts().add(product4);
    	
    	Cart cart5 = new  Cart();
    	cart1.setId(null);
    	cart1.setUser(user5);
    	cart1.getProducts().add(product5);
    	
    	cartRepositoty.saveAll(Arrays.asList(cart1,cart2,cart3,cart3,cart4,cart5));
    	
    }
}
