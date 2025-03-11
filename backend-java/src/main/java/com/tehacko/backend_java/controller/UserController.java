package com.tehacko.backend_java.controller;

import com.tehacko.backend_java.model.User;
import com.tehacko.backend_java.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping({"/", "home"})
    public String home() {
        return "home";
    }

    @GetMapping("adduser")
    public String addUser(){
        return "adduser";
    }

    @PostMapping("handleForm")
    public String handleForm(User user){
        userService.addUser(user);
        return "success";

    }

    @GetMapping("viewallusers")
    public String viewUsers(Model m) {
        List<User> users = userService.getAllUsers();
        m.addAttribute("users", users);
        return "viewallusers";
    }

    @PutMapping("user")
    public User updateUser(@RequestBody User user){
        userService.updateUser(user);
        return userService.getUser(user.getuId());
    }

    @DeleteMapping("user/{uId}")
    public String deleteUser(@PathVariable int uId) {
        userService.deleteUser(uId);
        return "Uživatelský účet by smazán.";
    }

    @GetMapping("users/keyword/{keyword}")
    public List<User> searchByKeyword(@PathVariable("keyword") String keyword){
        return userService.search(keyword);
    }

//    @GetMapping("load")
//    public String loadData(){
//        userService.load();
//        return "Data byla úspěšně načtena.";
//    }

}
