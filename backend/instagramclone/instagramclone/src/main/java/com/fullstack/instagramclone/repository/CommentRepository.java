package com.fullstack.instagramclone.repository;

import java.util.ArrayList;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.fullstack.instagramclone.Entity.Comments;

@Repository
public interface CommentRepository extends CrudRepository<Comments,Integer> {
	public Comments save(Comments comment);
	public ArrayList<Comments> findAll();
	public ArrayList<Comments> findByPostid(String postid);

}
