package com.MedArchiv.MedArchiv.Service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.MedArchiv.MedArchiv.Model.Doctor;

@Service
public interface DoctorService {
	    Doctor readById(Long id);
	    Doctor save(Doctor doctor);
	    Doctor update(Doctor doctor);
	    void delete(Long id);
	    Iterable<Doctor> findAll();
	    
	    Doctor loginDoctor(String emailId, String password);
	public List<Doctor> getAllDoctor();
	public Doctor getDoctorById(Long id);
	public Doctor updateDoctorStatus(Long id,String status);
	public String status(long id);
}

