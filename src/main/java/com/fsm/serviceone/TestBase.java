package com.fsm.serviceone;

import com.fsm.serviceone.entities.User;
import com.fsm.serviceone.repositories.EmailRepository;
import com.fsm.serviceone.repositories.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

@Configuration
@Profile("test")
public class TestBase implements CommandLineRunner{
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private EmailRepository emailRepository;

    @Override
    public void run(String... args) throws Exception {

        User user1 = new User(null,"fabio","123");

        userRepository.save(user1);
        /*User user2 = new User(null,"maria","1234");
        User user3 = new User(null,"clara","12345");
        User user4 = new User(null,"joão","123456");
        User user5 = new User(null,"david","1234567");
        userRepository.saveAll(Arrays.asList(user1,user2,user3,user4,user5));

        EmailEntities email1 = new EmailEntities(null,"fabio@gmail.com",true,user1);
        EmailEntities email2 = new EmailEntities(null,"maria@gmail.com",true,user2);
        EmailEntities email3 = new EmailEntities(null,"clara@gmail.com",true,user3);
        EmailEntities email4 = new EmailEntities(null,"lucas@gmail.com",true,user4);
        EmailEntities email5 = new EmailEntities(null,"david@gmail.com",true,user5);

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
