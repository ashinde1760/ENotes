package com.ENotes.ENotes.services;

import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.ENotes.ENotes.Repo.AddNoteRepository;
import com.ENotes.ENotes.Repo.ContactUsRepository;
import com.ENotes.ENotes.Repo.UserRepository;
import com.ENotes.ENotes.entity.AddNotes;
import com.ENotes.ENotes.entity.ContactUs;
import com.ENotes.ENotes.entity.NoteDetails;
import com.ENotes.ENotes.entity.UserLogin;
import com.ENotes.ENotes.entity.UserReg;

import net.bytebuddy.implementation.bytecode.Throw;

@Service
public class UserServiceImpl  implements UserService{

	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private AddNoteRepository addNotes;
	
	@Autowired
	private ContactUsRepository contactRepo;
	
	@Override
	public UserReg regUser(UserReg user) throws Exception {
		
		
		  UserReg local=this.userRepository.findByUsername(user.getUsername()); 
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

	@Override
	public UserReg getUserLogin(UserLogin userLogin) throws Exception {
		UserReg local=this.userRepository.findByUsernameAndPassword(userLogin.getUsername(),userLogin.getPassword());
		if(local!=null)
		{
			return local;
		}
		else
		{
			throw new Exception("Username or password is invalid");
		}
	}

	@Override
	public Set<AddNotes> showNotes(int uid) {
		Set<AddNotes> addNotes1=this.addNotes.findAllByUid(uid);
		return addNotes1;
	}

	@Override
	public Set<AddNotes> deleteNotes(int id) 
	{
		Set<AddNotes> addNotes1=new HashSet<AddNotes>();
		this.addNotes.deleteById(id);
		return addNotes1;
	}

	
	

	@Override
	public AddNotes updateNote(NoteDetails note,int id) throws Exception 
	{
		AddNotes addNotes=this.addNotes.findByNoteId(id);
		if(addNotes.getNoteId()==id)
		{
			addNotes.setTitle(note.getTitle());
			addNotes.setContent(note.getContent());
			addNotes.setDate(note.getDate());
			this.addNotes.save(addNotes);
			return addNotes;
		}
		else
		{
			throw new Exception("something went wrong");
		}
	}

	@Override
	public ContactUs contactUs(ContactUs contactUs) {
		this.contactRepo.save(contactUs);
		return contactUs;
	}

//	@Override
//	public Set<AddNotes> showNote(int id) {
//		Set<AddNotes> addNotes1=this.addNotes.findAllById(id);
//		return addNotes1;
//	}
}
