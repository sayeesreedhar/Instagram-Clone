package com.fullstack.instagramclone.Entity;

import java.sql.Timestamp;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity(name="Status")
public class Status {
	@Id
	@GeneratedValue
	private int id;
	private String statusid;
	private String userid;
	private String path;
	private String username;
	private Timestamp time;
	public Status(int id, String statusid, String userid, String path, String username, Timestamp time) {
		super();
		this.id = id;
		this.statusid = statusid;
		this.userid = userid;
		this.path = path;
		this.username = username;
		this.time = time;
	}
	public Status() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public Timestamp getTime() {
		return time;
	}
	public void setTime(Timestamp time) {
		this.time = time;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getStatusid() {
		return statusid;
	}
	public void setStatusid(String statusid) {
		this.statusid = statusid;
	}
	public String getUserid() {
		return userid;
	}
	public void setUserid(String userid) {
		this.userid = userid;
	}
	public String getPath() {
		return path;
	}
	public void setPath(String path) {
		this.path = path;
	}

}
