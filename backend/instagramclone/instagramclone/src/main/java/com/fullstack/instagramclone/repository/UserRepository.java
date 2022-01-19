package com.fullstack.instagramclone.repository;

import java.util.ArrayList;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.fullstack.instagramclone.Entity.Users;

@Repository
public interface UserRepository extends CrudRepository<Users, Integer> {
	
	public Users save(Users user);
	public Users findByUserid(String userid);
	public ArrayList<Users> findAll();

}
