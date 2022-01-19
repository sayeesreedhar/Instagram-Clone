package com.fullstack.instagramclone.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fullstack.instagramclone.Entity.Comments;
import com.fullstack.instagramclone.Entity.Users;
import com.fullstack.instagramclone.service.ServiceClass;
import com.fullstack.instagramclone.service.ServiceclassComments;

@RestController
@RequestMapping("/comments")
public class Commentscontroller {
	@Autowired
	ServiceclassComments f;
	@Autowired
	ServiceClass v;
	@PostMapping("")
	public Comments addcomments(@RequestBody Comments comment) {
		Users u=v.getData(comment.getUserid());
		comment.setUsername(u.getUsername());
		return f.addcomments(comment);
		
	}

	@GetMapping("")
	public ArrayList<Comments> displayallcomments(){
		return  f.showallacomments();
	}
	@GetMapping("/{postid}")
	public ArrayList<Comments> displaypostcomments(@PathVariable("postid") String postid)
	{
		return f.showpostcomments(postid);
	}
}

