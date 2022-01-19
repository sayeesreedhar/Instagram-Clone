package com.fullstack.instagramclone.repository;

import java.util.ArrayList;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.fullstack.instagramclone.Entity.Followers;

@Repository
public interface FollowerRepository extends CrudRepository<Followers,Integer> {
	
	public Followers save(Followers follower);
	
	public ArrayList<Followers> findByUserid(String userid);

}
