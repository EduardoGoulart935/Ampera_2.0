package Edu.Ampera_20.Controller;

import Edu.Ampera_20.Model.User;
import Edu.Ampera_20.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    UserService userService;

    @PostMapping("/login")
    public ResponseEntity<?> auth(@RequestBody User user){
        User userlogin = userService.login(user.getEmail(), user.getPassword());

        if (userlogin != null){
            return ResponseEntity.ok(userlogin);
        }

        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid Email or Password");
    }
}