package com.example.ThesisProject2.repository;

import com.example.ThesisProject2.document.User;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface UserRepository extends MongoRepository<User, String> {
    Optional<User> findByUsername(String username);
    Optional<User> findByUsernameAndPassword(String username, String password);
    Optional<User> findByPassword(String password);
    Optional<User> findByEmail(String email);


}