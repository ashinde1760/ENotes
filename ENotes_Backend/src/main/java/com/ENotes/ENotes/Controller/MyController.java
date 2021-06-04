package com.ENotes.ENotes.Controller;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ENotes.ENotes.entity.AddNotes;
import com.ENotes.ENotes.entity.ContactUs;
import com.ENotes.ENotes.entity.NoteDetails;
import com.ENotes.ENotes.entity.UserLogin;
import com.ENotes.ENotes.entity.UserReg;
import com.ENotes.ENotes.services.UserService;

@RestController
@RequestMapping("/user")
@CrossOrigin("*")
public class MyController {

	@Autowired
	private UserService userService;

	// creating new user
	@PostMapping("/")
	public UserReg regUser(@RequestBody UserReg userReg) throws Exception {
		return this.userService.regUser(userReg);
	}

	// create new note
	@PostMapping("/addNote")
	public AddNotes addNote(@RequestBody AddNotes addNotes) throws Exception {
		return this.userService.addNotes(addNotes);
	}

	// Login User
	@PostMapping("/login")
	public UserReg loginUser(@RequestBody UserLogin userLogin) throws Exception {
			
		return this.userService.getUserLogin(userLogin);
		
	}

	@GetMapping("/showNotes/{uid}")
	public Set<AddNotes> showNotes(@PathVariable int uid) throws Exception {
		return this.userService.showNotes(uid);
	}

	@DeleteMapping("/deleteNote/{id}")
	public boolean deleteNote(@PathVariable int id) throws Exception {
		this.userService.deleteNotes(id);
		return true;

	}

	@PutMapping("/editNote/{id}")
	public AddNotes editNote(@RequestBody NoteDetails note, @PathVariable int id) throws Exception {
		return this.userService.updateNote(note, id);

	}
	
	@PostMapping("/contact_us")
	public ContactUs contactUs(@RequestBody ContactUs contactUs)throws Exception
	{
		return this.userService.contactUs(contactUs);
	}
	
//	@GetMapping("/showNotes/{id}")
//	public Set<AddNotes> showNote(@PathVariable int id) throws Exception {
//		return this.userService.showNote(id);
//	}
}
