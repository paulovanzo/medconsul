package app.medconsul.controllers;

import app.medconsul.entities.User;
import app.medconsul.entities.DTO.UserDTO;
import app.medconsul.services.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin
public class AuthController {
    @Autowired
    private UserService userService;

    @PostMapping(value = "/login")
    public ResponseEntity<?> createAuthenticationToken(@RequestBody UserDTO userDTO){
        User user = userService.getUser(userDTO.getUsername());
        if ( user == null) {
            return new ResponseEntity<>("User not found", HttpStatus.FORBIDDEN);
        } else {
            return ResponseEntity.ok(user);
        }
    }

    @PostMapping(value = "/register")
    public ResponseEntity<?> saveUser(@RequestBody UserDTO user){
        return ResponseEntity.ok(userService.save(user));
    }

}