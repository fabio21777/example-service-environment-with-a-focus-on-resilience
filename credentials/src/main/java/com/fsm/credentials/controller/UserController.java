package com.fsm.credentials.controller;

import java.net.URI;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.fsm.credentials.dto.DtoUser;
import com.fsm.credentials.entities.User;
import com.fsm.credentials.services.UserService;

@RestController
@RequestMapping(value = "/users")
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping(value = "/{id}")
    public ResponseEntity<DtoUser> findById(@PathVariable String id) {
        DtoUser user = userService.findById(id);
        return ResponseEntity.ok().body(user);
    }
    @GetMapping
    public ResponseEntity<List<User>>findAll(){
    	List<User>list = userService.findAll();
    	return ResponseEntity.ok(list);
    }
    @PostMapping
    public ResponseEntity<User> insert(@Valid @RequestBody User userBody){
    	User user = userService.insert(userBody);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
				.buildAndExpand(user.getId()).toUri();
    	return ResponseEntity.created(uri).body(user);
    }
}
