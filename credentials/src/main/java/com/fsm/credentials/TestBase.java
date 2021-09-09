package com.fsm.credentials;



import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

import com.fsm.credentials.entities.EmailEntities;
import com.fsm.credentials.entities.User;
import com.fsm.credentials.repositories.EmailRepository;
import com.fsm.credentials.repositories.UserRepository;

@Configuration
@Profile("test")
public class TestBase implements CommandLineRunner{
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private EmailRepository emailRepository;

    @Override
    public void run(String... args) throws Exception {

        User user1 = User.builder()
        		.id(null)
        		.username("Fabio")
        		.password("123456")
        		.build();
        
        User user2 = User.builder()
        		.id(null)
        		.username("Maria")
        		.password("123456")
        		.build();
        
        User user3 = User.builder()
        		.id(null)
        		.username("David")
        		.password("123456")
        		.build();
        
        
        User user4 = User.builder()
        		.id(null)
        		.username("Andre")
        		.password("123456")
        		.build();
        
        
        User user5 = User.builder()
        		.id(null)
        		.username("Clara")
        		.password("123456")
        		.build();
        userRepository.saveAll(Arrays.asList(user1,user2,user3,user4,user5));
 

        EmailEntities email1 = EmailEntities.builder()
        					.id(null)
        					.email("Fabio@gmail.com")
        					.mainEmail(true)
        					.user(user1)
        					.build();
         EmailEntities email2 = EmailEntities.builder()
 							.id(null)
 							.email("Maria@gmail.com")
 							.mainEmail(true)
 							.user(user2)
 							.build();
         EmailEntities email3 = EmailEntities.builder()
 							.id(null)
 							.email("David@gmail.com")
 							.mainEmail(true)
 							.user(user3)
 							.build();
         EmailEntities email4 = EmailEntities.builder()
 							.id(null)
 							.email("Andre@gmail.com")
 							.mainEmail(true)
 							.user(user4)
 							.build();
         EmailEntities email5 = EmailEntities.builder()
 							.id(null)
 							.email("Clara@gmail.com")
 							.mainEmail(true)
 							.user(user5)
 							.build();
         
         emailRepository.saveAll(Arrays.asList(email1,email2,email3,email4,email5));
        
        

        
		user1.getEmails().add(email1);
        user2.getEmails().add(email2);
        user3.getEmails().add(email3);
        user4.getEmails().add(email4);
        user5.getEmails().add(email5);
        userRepository.saveAll(Arrays.asList(user1,user2,user3,user4,user5));
        
        

    }
}
