package com.tehacko.backend_java.controller;

import com.tehacko.backend_java.model.User;
import com.tehacko.backend_java.service.JwtService;
import com.tehacko.backend_java.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:3000") // Allow React
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private JwtService jwtService;

    @Autowired
    AuthenticationManager authenticationManager;

    @PostMapping("register")
    public User register(@RequestBody User user){
        return userService.saveUser(user);
    }

    @PostMapping("login")
    public ResponseEntity<Map<String, Object>> login(@RequestBody User user) {
        Map<String, Object> response = new HashMap<>();
        try {
            Authentication authentication = authenticationManager
                    .authenticate(new UsernamePasswordAuthenticationToken(user.getEmail(), user.getPassword()));
            if (authentication.isAuthenticated()) {
                String token = jwtService.generateToken(user.getEmail());
                response.put("success", true);
                response.put("token", token);
                response.put("user", user); // Assuming user object includes is_admin field
                return ResponseEntity.ok(response);
            } else {
                response.put("success", false);
                response.put("message", "Invalid credentials");
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(response);
            }
        } catch (Exception e) {
            response.put("success", false);
            response.put("message", "An error occurred");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }

//    @PostMapping("login")
//    public String login(@RequestBody User user){
//        Authentication authentication = authenticationManager
//                .authenticate(new UsernamePasswordAuthenticationToken(user.getEmail(), user.getPassword()));
//        if(authentication.isAuthenticated())
//            return jwtService.generateToken(user.getEmail());
//        else
//            return "Přihlášení uživatele selhalo";
//    }

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

    //User Details View, Edit, Delete
    //View
    @GetMapping({"user/{uId}"})
    public User viewUserDetails(@PathVariable("uId") Integer uId) {
        return userService.getUser(uId);
    }
    //Edit
    @PutMapping("user")
    public User updateUser(@RequestBody User user){
        userService.updateUser(user);
        return userService.getUser(user.getUId());
    }
    //Delete
    @DeleteMapping("user/{uId}")
    public String deleteUser(@PathVariable int uId) {
        userService.deleteUser(uId);
        return "Uživatelský účet by smazán.";
    }
    //Search by Keyword
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
