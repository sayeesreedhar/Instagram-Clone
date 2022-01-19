package com.fullstack.instagramclone.service;


import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fullstack.instagramclone.Entity.Users;
import com.fullstack.instagramclone.repository.UserRepository;

@Service
public class ServiceClass {
	@Autowired
	UserRepository u;
public Users setData(Users user) {
	return u.save(user);
	
}
public Users getData(String userid) {
	return u.findByUserid(userid);
}
public ArrayList<Users> getalldata()
{return u.findAll();}
}
