package com.fullstack.instagramclone.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fullstack.instagramclone.Entity.Followers;
import com.fullstack.instagramclone.service.ServiceclassFollower;

@RestController
@RequestMapping("/followers")
public class Followercontroller {
	@Autowired
	ServiceclassFollower m;
	@PostMapping("")
	public Followers setfollowers(@RequestBody Followers follower) {
		
		return m.setfollower(follower);
	}
	@GetMapping("/{userid}")
	public ArrayList<Followers> getfollowers(@PathVariable("userid") String userid){
		return m.getfollowers(userid);
	}

}
