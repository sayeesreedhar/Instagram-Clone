package com.fullstack.instagramclone.repository;

import java.util.ArrayList;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.fullstack.instagramclone.Entity.Status;

@Repository
public interface StatusRepository extends CrudRepository<Status, Integer>{
	
	public Status save(Status status);
	public ArrayList<Status> findAll();

}
