package com.ENotes.ENotes.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.ENotes.ENotes.Repo.AddNoteRepository;
import com.ENotes.ENotes.Repo.UserRepository;
import com.ENotes.ENotes.entity.AddNotes;
import com.ENotes.ENotes.entity.UserReg;

@Service
public class UserServiceImpl  implements UserService{

	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private AddNoteRepository addNotes;
	
	
	@Override
	public UserReg regUser(UserReg user) throws Exception {
		
		
		  UserReg local=this.userRepository.findByEmail(user.getEmail()); 
		  if(local !=null) 
		  { 
			  System.out.println("User is already present...Please login"); 
			  throw new Exception("User already present"); 
		  }
		  else 
		  {
			  local=this.userRepository.save(user); 
		  }
		 
		  return local;
	}

	@Override
	public AddNotes addNotes(AddNotes notes) throws Exception {
		// TODO Auto-generated method stub
		
		this.addNotes.save(notes);
		return notes;
	}
}
