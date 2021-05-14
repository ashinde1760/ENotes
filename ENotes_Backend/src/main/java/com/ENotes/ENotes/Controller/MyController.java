package com.ENotes.ENotes.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ENotes.ENotes.entity.AddNotes;
import com.ENotes.ENotes.entity.UserReg;
import com.ENotes.ENotes.services.UserService;

@RestController
@RequestMapping("/user")
@CrossOrigin("*")
public class MyController {

	@Autowired
	private UserService userService;
	
	//creating new user
	@PostMapping("/")
	public UserReg regUser(@RequestBody UserReg userReg) throws Exception
	{
		return this.userService.regUser(userReg);	
		
	}
	//create new note
	@PostMapping("/addNote")
	public AddNotes addNote(@RequestBody AddNotes addNotes) throws Exception
	{
		return this.userService.addNotes(addNotes);	
		
	}
	
	
	
	
}
