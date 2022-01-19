package com.fullstack.instagramclone.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fullstack.instagramclone.Entity.Followers;
import com.fullstack.instagramclone.repository.FollowerRepository;

@Service
public class ServiceclassFollower {

	@Autowired
	FollowerRepository f;
	
	public Followers setfollower(Followers follower) {
		return f.save(follower);
	}
	public ArrayList<Followers> getfollowers(String userid){
		return f.findByUserid(userid);
	}
}
