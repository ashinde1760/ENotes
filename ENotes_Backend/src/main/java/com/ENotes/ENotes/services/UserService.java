package com.ENotes.ENotes.services;

import com.ENotes.ENotes.entity.AddNotes;
import com.ENotes.ENotes.entity.UserReg;

public interface UserService {

	public UserReg regUser(UserReg user) throws Exception;
	
	public AddNotes addNotes(AddNotes notes)throws Exception;
}
