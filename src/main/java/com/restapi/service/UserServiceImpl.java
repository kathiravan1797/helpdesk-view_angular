package com.restapi.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.restapi.dao.UserDAO;
import com.restapi.model.Users;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserDAO userdao;
	
	
	public List<Users> checkUser(String uname, String pass) {
		return userdao.checkUser(uname, pass);
	}
	
	

}
