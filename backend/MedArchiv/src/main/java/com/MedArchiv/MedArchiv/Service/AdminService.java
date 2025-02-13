package com.MedArchiv.MedArchiv.Service;

import org.springframework.stereotype.Service;

import com.MedArchiv.MedArchiv.Model.Admin;
import com.MedArchiv.MedArchiv.Model.Notification;
@Service
public interface AdminService {
		
					public Admin readbyid(int id);
					public Admin loginAdmin(String emailId, String password);
	}
