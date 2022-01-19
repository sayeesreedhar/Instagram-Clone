package com.fullstack.instagramclone.repository;

import java.util.ArrayList;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.fullstack.instagramclone.Entity.Posts;

import antlr.collections.List;

@Repository
public interface PostRepository extends CrudRepository<Posts, Integer> {
	public Posts save(Posts post);
	public ArrayList<Posts> findAll();
	public Posts findByuserid(String userid);
	public ArrayList<Posts> findAllByuserid(String userid);

}
