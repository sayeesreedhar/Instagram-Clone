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
import com.fullstack.instagramclone.Entity.Posts;
import com.fullstack.instagramclone.Entity.Users;
import com.fullstack.instagramclone.service.SeriviceclassPosts;
import com.fullstack.instagramclone.service.ServiceClass;
import com.fullstack.instagramclone.service.ServiceclassFollower;

@RestController
@RequestMapping("/post")
public class Postscontroller {
	@Autowired
	SeriviceclassPosts w;
	@Autowired
	ServiceclassFollower g;
	@Autowired
	ServiceClass y;
	@PostMapping("")
	public Posts setposts(@RequestBody Posts post){
		return w.insertPosts(post);}
	@GetMapping("")
	public ArrayList<Posts> displayposts(){
		return w.showAllPosts();
	}
	@GetMapping("/{feed}")
	public ArrayList<Posts> dispalyfeed(@PathVariable("feed") String feed ){
		
		ArrayList<Users> u=new ArrayList<Users>();
		ArrayList<Followers> q=g.getfollowers(feed);
		
		System.out.print(q);
		for(int i=0;i<q.size();i++)
		u.add(y.getData(q.get(i).getFollowerid()));
		System.out.print(u);
		return w.showfeed(u);
	}
	

}
