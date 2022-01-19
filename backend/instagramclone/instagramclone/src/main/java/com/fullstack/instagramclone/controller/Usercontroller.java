package com.fullstack.instagramclone.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fullstack.instagramclone.Entity.Users;
import com.fullstack.instagramclone.service.ServiceClass;

@RestController
@RequestMapping("/users")
public class Usercontroller {
	@Autowired
	ServiceClass s;
	@PostMapping("")
	public Users submitusers(@RequestBody Users users) {
		return s.setData(users);
	}
	@PostMapping("/{userid}")
	public Users getdata(@PathVariable("userid") String userid) {
		System.out.println("Sent data");
		return s.getData(userid);
	}
@PostMapping("/all")
public ArrayList<Users> getallusers(){
	return s.getalldata();
}
}
