package com.MedArchiv.MedArchiv.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.MedArchiv.MedArchiv.Model.Admin;
import com.MedArchiv.MedArchiv.Repository.AdminRepository;
@Service
public class AdminServiceImplements implements AdminService{

	@Autowired
	private AdminRepository adminRepository;
	@Override
	public Admin readbyid(int id) {
		// TODO Auto-generated method stub
		return null;
	}
	 @Override
	    public Admin loginAdmin(String emailId, String password) {
	        return adminRepository.findByEmailIdAndPassword(emailId, password).orElse(null);
	    }

}
