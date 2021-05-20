package com.ENotes.ENotes.services;

import java.util.Set;

import com.ENotes.ENotes.entity.AddNotes;
import com.ENotes.ENotes.entity.NoteDetails;
import com.ENotes.ENotes.entity.UserLogin;
import com.ENotes.ENotes.entity.UserReg;

public interface UserService {

	public UserReg regUser(UserReg user) throws Exception;
	
	public AddNotes addNotes(AddNotes notes)throws Exception;

	public UserReg getUserLogin(UserLogin userLogin)throws Exception;

	public Set<AddNotes> showNotes(int uid);

	public Set<AddNotes> deleteNotes(int id);

	public AddNotes updateNote(NoteDetails note, int id) throws Exception;

	
}
