package com.fsm.serviceone;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

import com.fsm.serviceone.entities.EmailEntities;
import com.fsm.serviceone.entities.User;
import com.fsm.serviceone.repositories.EmailRepository;
import com.fsm.serviceone.repositories.UserRepository;

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
        		.username("fabio")
        		.password("123456")
        		.build();
        
        User user2 = User.builder()
        		.id(null)
        		.username("fabio")
        		.password("123456")
        		.build();
        
        User user3 = User.builder()
        		.id(null)
        		.username("fabio")
        		.password("123456")
        		.build();
        
        
        User user4 = User.builder()
        		.id(null)
        		.username("fabio")
        		.password("123456")
        		.build();
        
        
        User user5 = User.builder()
        		.id(null)
        		.username("fabio")
        		.password("123456")
        		.build();
        userRepository.save(user1);
        
/*
        userRepository.saveAll(Arrays.asList(user1,user2,user3,user4,user5));*/

        EmailEntities email1 = EmailEntities.builder()
        					.id(null)
        					.email("fabio@gmail.com")
        					.mainEmail(true)
        					.user(user1)
        					.build();
        emailRepository.save(email1);
        
       /*

        emailRepository.saveAll(Arrays.asList(email1,email2,email3,email4,email5));

        user1.getEmails().add(email1);
        user2.getEmails().add(email2);
        user3.getEmails().add(email3);
        user4.getEmails().add(email4);
        user5.getEmails().add(email5);
        userRepository.saveAll(Arrays.asList(user1,user2,user3,user4,user5));
       */ 
    }
}
