package com.example.ThesisProject2.controller;

import com.example.ThesisProject2.document.User;
import com.example.ThesisProject2.dto.LoginDTO;
import com.example.ThesisProject2.dto.SignupDTO;
import com.example.ThesisProject2.dto.TokenDTO;
import com.example.ThesisProject2.repository.UserRepository;
import com.example.ThesisProject2.rest.AuthREST;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@Controller
public class UserController {
    @Autowired
    private final AuthREST authREST;
    @Autowired
    UserRepository userRepository;

    public UserController(AuthREST authREST) {
        this.authREST = authREST;

    }


    @GetMapping("/login")
    public String getLoginPage(Model model) {
        model.addAttribute("loginRequest", new LoginDTO());
        return "login_page";
    }
    @GetMapping("/register")
    public String getRegisterPage(Model model) {
        model.addAttribute("registerRequest", new SignupDTO());
        System.out.println();
        return "register_page";
    }
    @PostMapping("/register")
    public String register(@ModelAttribute SignupDTO signupDTO){
        System.out.println("register request: " + signupDTO);
        User registeredUser = authREST.signup(signupDTO);
        return registeredUser == null ? "error_page" : "redirect:/login";
    }
    @PostMapping("/analyze")
    public String analyze(@ModelAttribute LoginDTO loginDTO, Model model){
        System.out.println("login request: " + loginDTO);

        return "analyse_page";


    }
    @PostMapping("/result")
    public String resultPage(@ModelAttribute LoginDTO loginDTO, Model model){
        return "result_page";
    }

}
