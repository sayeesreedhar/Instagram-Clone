package com.fullstack.instagramclone.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity(name="Followers")
public class Followers {
	@Id
	@GeneratedValue
	int id;
	private String userid;
	private String followerid;
	public Followers() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Followers(String userid, String followerid) {
		super();
		this.userid = userid;
		this.followerid = followerid;
	}
	public String getUserid() {
		return userid;
	}
	public void setUserid(String userid) {
		this.userid = userid;
	}
	public String getFollowerid() {
		return followerid;
	}
	public void setFollowerid(String followerid) {
		this.followerid = followerid;
	}
	

}
