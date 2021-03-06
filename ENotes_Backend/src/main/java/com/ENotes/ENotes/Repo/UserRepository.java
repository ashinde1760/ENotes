package com.ENotes.ENotes.Repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ENotes.ENotes.entity.UserReg;

public interface UserRepository extends JpaRepository<UserReg , Integer>{

	public UserReg findByUsername(String username);

	public UserReg findByUsernameAndPassword(String username, String password);

}
