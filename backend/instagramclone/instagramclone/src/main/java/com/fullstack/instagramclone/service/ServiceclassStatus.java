package com.fullstack.instagramclone.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fullstack.instagramclone.Entity.Status;
import com.fullstack.instagramclone.repository.StatusRepository;

@Service
public class ServiceclassStatus {
	@Autowired
	StatusRepository r;
	public Status setStatus(Status status) {
		return r.save(status);
		
	}
	public ArrayList<Status> getAllStatus(){
		
		return r.findAll();
	}

}
