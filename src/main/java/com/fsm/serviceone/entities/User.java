package com.fsm.serviceone.entities;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Data;
import lombok.Setter;


@Builder
@Data
@Entity
@Table(name = "tb_user")
public class User implements Serializable {
    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Setter(AccessLevel.NONE)
    private String id;
    @NotEmpty(message = "user name is required")
    @Size(min = 2, max = 30 , message = "invalid length Name must be between 2 to 30 characters")
    @Setter(AccessLevel.NONE)
    private String username;
    @NotEmpty(message = "user password is required")
    @Setter(AccessLevel.NONE)
    @Size(min = 6, max = 30, message = "password invalid!! length password must be between 2 to 30 characters ")
    private String password;
    @JsonIgnore
    @OneToMany(mappedBy = "user")
    @Setter(AccessLevel.NONE)
    @Builder.Default
    private Set<EmailEntities>emails = new HashSet<>();
    
}