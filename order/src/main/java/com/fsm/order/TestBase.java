package com.fsm.order;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

import com.fsm.order.entities.Order;
import com.fsm.order.entities.Product;
import com.fsm.order.entities.User;
import com.fsm.order.repositories.OrderRepository;
import com.fsm.order.repositories.ProductRepository;
import com.fsm.order.repositories.UserRepository;


@Configuration
@Profile("test")
public class TestBase implements CommandLineRunner{
    @Autowired
    OrderRepository orderRepository;
    @Autowired
    ProductRepository productRepository;
    @Autowired
    UserRepository userRepository;
    
    @Override
    public void run(String... args) throws Exception {
    	User user = new User(null,"Fabio");
    	userRepository.save(user);
    	
    	Product product = new Product(null, "PC gamer", 10000.00, "teste/teste");
    	productRepository.save(product);
    	
    	
    	Order order = new Order(null, 1, user);
    	order.getProducts().add(product);
    	orderRepository.save(order);
    	
    	
    	
       	User user1 = new User(null,"Joao");
    	userRepository.save(user1);
    	
    	Product product1 = new Product(null, "PC utra", 10000.00, "teste/teste1");
    	productRepository.save(product1);
    	
    	
    	Order order1 = new Order(null, 1, user1);
    	order.getProducts().add(product1);
    	orderRepository.save(order1);
    	
    }
}
