package com.ENotes.ENotes.entity;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinColumns;
import javax.persistence.JoinTable;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="Users")
public class UserReg {

	@Id
	@Column(name = "userId")
	@GeneratedValue
	private int id;
	private String name;
	private String email;
	private String password;
	

	@OneToMany
	@JoinColumn(name = "uid")
	private Set <AddNotes> addNotes=new HashSet<>();
	
	


	public Set<AddNotes> getAddNotes() {
		return addNotes;
	}


	public void setAddNotes(Set<AddNotes> addNotes) {
		this.addNotes = addNotes;
	}


	public UserReg() {
		super();
	}
	
	
	public UserReg(int id, String name, String email, String password) {
		super();
		this.id = id;
		this.name = name;
		this.email = email;
		this.password = password;
	}



	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
		
}
