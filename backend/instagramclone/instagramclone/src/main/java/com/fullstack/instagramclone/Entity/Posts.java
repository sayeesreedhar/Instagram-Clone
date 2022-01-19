package com.fullstack.instagramclone.Entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity(name="Posts")
public class Posts {
	@Id
	@GeneratedValue
	private int id;
	private String postid;
	@Column(unique=false)
	private String userid;
	private String username;
	@Column(unique=true)
	private String postpath;
	private String profile;
	public Posts(int id, String postid, String userid, String username, String postpath, String profile, int likes) {
		super();
		this.id = id;
		this.postid = postid;
		this.userid = userid;
		this.username = username;
		this.postpath = postpath;
		this.profile = profile;
		this.likes = likes;
	}
	private int likes;
	public Posts() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public String getProfile() {
		return profile;
	}

	public void setProfile(String profile) {
		this.profile = profile;
	}

	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getPostid() {
		return postid;
	}
	public void setPostid(String postid) {
		this.postid = postid;
	}
	public String getUserid() {
		return userid;
	}
	public void setUserid(String userid) {
		this.userid = userid;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPostpath() {
		return postpath;
	}
	public void setPostpath(String postpath) {
		this.postpath = postpath;
	}
	public int getLikes() {
		return likes;
	}
	public void setLikes(int likes) {
		this.likes = likes;
	}

}
