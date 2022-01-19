package com.fullstack.instagramclone.Entity;

import java.sql.Timestamp;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity(name="Comments")
public class Comments {
	@Id
	@GeneratedValue
	private int id;
	private String commentid;
	private String userid;
	private String comments;
	private String postid;
	private String username;
	private Timestamp time; 
	public Comments(int id, String commentid, String userid, String comments, String postid, String username,
			Timestamp time) {
		super();
		this.id = id;
		this.commentid = commentid;
		this.userid = userid;
		this.comments = comments;
		this.postid = postid;
		this.username = username;
		this.time = time;
	}
	
	public Comments() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public String getPostid() {
		return postid;
	}

	public void setPostid(String postid) {
		this.postid = postid;
	}

	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getCommentid() {
		return commentid;
	}
	public void setCommentid(String commentid) {
		this.commentid = commentid;
	}
	public String getUserid() {
		return userid;
	}
	public void setUserid(String userid) {
		this.userid = userid;
	}
	public String getComments() {
		return comments;
	}
	public void setComments(String comments) {
		this.comments = comments;
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

}
