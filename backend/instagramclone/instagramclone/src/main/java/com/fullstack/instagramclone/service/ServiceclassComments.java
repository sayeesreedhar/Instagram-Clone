package com.fullstack.instagramclone.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fullstack.instagramclone.Entity.Comments;

import com.fullstack.instagramclone.repository.CommentRepository;

@Service
public class ServiceclassComments {
	@Autowired
	CommentRepository k;
	@Autowired
	ServiceClass d;
	
public Comments addcomments(Comments comment) {
			return k.save(comment);
}
public ArrayList<Comments> showallacomments(){
	return k.findAll();
}
public ArrayList<Comments> showpostcomments(String postid){
	return k.findByPostid(postid);
}
}
