package com.fullstack.instagramclone.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fullstack.instagramclone.Entity.Posts;
import com.fullstack.instagramclone.Entity.Users;
import com.fullstack.instagramclone.repository.PostRepository;

@Service
public class SeriviceclassPosts {
	@Autowired
	PostRepository p;
    @Autowired
	ServiceClass m;
public Posts insertPosts(Posts post) {
	Users y=m.getData(post.getUserid());
	post.setUsername(y.getUsername());
	post.setProfile(y.getProfilePic());
	return p.save(post);
	}
public ArrayList<Posts> showAllPosts(){
	return p.findAll();
}
public ArrayList<Posts> showfeed(ArrayList<Users> users){
	ArrayList<Posts> o=new ArrayList<Posts>();
	for(int i=0;i<users.size();i++) {
		
		try
		{o.add(p.findByuserid(users.get(i).getUserid()));o.remove(null);}
		catch(Exception e)
		{o.addAll(p.findAllByuserid(users.get(i).getUserid()));o.remove(null);}
	}
	return o;
}
}
