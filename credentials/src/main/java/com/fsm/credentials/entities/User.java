package com.fsm.credentials.entities;

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

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Builder.Default;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;


@Builder(toBuilder = true)
@Getter
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@AllArgsConstructor(access = AccessLevel.PACKAGE)
@NoArgsConstructor(access = AccessLevel.PACKAGE)
@Entity
@Table(name = "tb_user")


public class User implements Serializable {
    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @EqualsAndHashCode.Include
    private String id;
    @NotEmpty(message = "user name is required")
    @Size(min = 2, max = 30 , message = "invalid length Name must be between 2 to 30 characters")
    private String username;
    @NotEmpty(message = "user password is required")
    @Size(min = 6, max = 30, message = "password invalid!! length password must be between 2 to 30 characters ")
    private String password;
    @OneToMany(mappedBy = "user")
    @Default
    private Set<EmailEntities>emails = new HashSet<>();
    
}