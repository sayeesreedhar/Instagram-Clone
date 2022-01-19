package com.fullstack.instagramclone.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fullstack.instagramclone.Entity.Status;
import com.fullstack.instagramclone.Entity.Users;
import com.fullstack.instagramclone.service.ServiceClass;
import com.fullstack.instagramclone.service.ServiceclassStatus;

@RestController
@RequestMapping("/status")
public class Statuscontroller {
	@Autowired
	ServiceclassStatus o;
	@Autowired
	ServiceClass m;
	
	@PostMapping("")
	public Status setstatus(@RequestBody Status status) {
		
		Users a=m.getData(status.getUserid());
		status.setUsername(a.getUsername());
		return o.setStatus(status);
		
		
	}
	@GetMapping("")
	public ArrayList<Status> getstatus() {
		
		return o.getAllStatus() ;
	}
	

	
}
