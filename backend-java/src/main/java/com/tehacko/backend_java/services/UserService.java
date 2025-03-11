package com.tehacko.backend_java.services;

import com.tehacko.backend_java.model.User;
import com.tehacko.backend_java.repo.UserRepo;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class UserService {


    @Autowired
    private UserRepo userRepo;

    public void addUser(User user){
        userRepo.save(user);
    }

    public List<User> getAllUsers() {
        return userRepo.findAll();
    }

    public User getUser(int uId) {
        return userRepo.findById(uId).orElse(new User());
    }

    public void updateUser(User user) {
        userRepo.save(user);
    }

    public void deleteUser(int uId) {
        userRepo.deleteById(uId);
    }

    public List<User> search(String keyword) {
        return userRepo.findByEmailContainingOrPassword(keyword, keyword);
    }


//    public void load() {
//        // ArrayList to store User objects
//        List<User> users = new ArrayList<>(Arrays.asList(
//                new User(1, "lopoto@seznam.cz", "lol", true),
//                new User(2, "kolotoc@seznam.cz", "lolo", false),
//                new User(3, "mato@seznam.cz", "olmo", false)
//        ));
//        userRepo.saveAll(users);
//    }
}
