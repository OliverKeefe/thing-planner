package com.thingplanner.backend.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class AuthController {

    @GetMapping("/token")
    public Map<String, String> getToken() {
        return Map.of("message", "Placeholder - will return JWT.");
    }

    @GetMapping("/login")
    public boolean tryLogin(
            @RequestParam String username,
            @RequestParam String password
    ) {
        return true;
    }
}
