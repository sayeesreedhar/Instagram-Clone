package com.fullstack.instagramclone.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;



@Entity(name="Users")
public class Users {
	@Id
	@GeneratedValue
	int id;

private String userid;
private String username;
private String fullName;
private String profilePic;

public Users() {
	super();
	// TODO Auto-generated constructor stub
}
public Users(int id, String userid, String username, String fullName, String profilePic) {
	super();
	this.id = id;
	this.userid = userid;
	this.username = username;
	this.fullName = fullName;
	this.profilePic = profilePic;
}
public int getId() {
	return id;
}
public void setId(int id) {
	this.id = id;
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
public String getFullName() {
	return fullName;
}
public void setFullName(String fullName) {
	this.fullName = fullName;
}
public String getProfilePic() {
	return profilePic;
}
public void setProfilePic(String profilePic) {
	this.profilePic = profilePic;
}


}
