package com.ENotes.ENotes;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.ENotes.ENotes.entity.AddNotes;
import com.ENotes.ENotes.entity.UserReg;
import com.ENotes.ENotes.services.UserService;

@SpringBootApplication
public class ENotesApplication implements CommandLineRunner{

	@Autowired
	private UserService userService;
	
	public static void main(String[] args) {
		SpringApplication.run(ENotesApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		// TODO Auto-generated method stub
		
		System.out.println("starting code");
		
		
		/*
		 * UserReg user=new UserReg(); user.setName("Akshay Shinde");
		 * user.setEmail("ashinde12@gmail.com"); user.setPassword("Akki@123"); UserReg
		 * user1=this.userService.regUser(user); System.out.println(user1.getName());
		 * 
		 * 
		 * AddNotes notes=new AddNotes(); notes.setTitle("Java");
		 * notes.setContent("It is a very secure Programming language"); String
		 * sol=this.userService.addNotes(notes); System.out.println(sol);
		 */	
		
	}

}
