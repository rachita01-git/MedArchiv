package com.MedArchiv.MedArchiv.Controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;

import com.MedArchiv.MedArchiv.Model.Doctor;
import com.MedArchiv.MedArchiv.Service.DoctorService;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/Doctorapi")
@CrossOrigin("*")
public class DoctorController {

	@Autowired
	private DoctorService doctorservice;
	@GetMapping("/Doctors")
	public List<Doctor> getAllDoctors()
	{
		return doctorservice.getAllDoctor();
	}
	
	@GetMapping("/Doctor/{id}")
	public ResponseEntity<?> getDoctorById(@PathVariable Long id)
	{
		Doctor emp=doctorservice.getDoctorById(id);
		if(emp==null)
			return ResponseEntity.notFound().build();
		return ResponseEntity.ok(emp);
	}
	
	@PostMapping("/UpdateStatus/{id}")
	public Doctor updateStatus(@PathVariable Long id,@RequestBody String Status) {
		return doctorservice.updateDoctorStatus(id, Status);
	}
	
	@GetMapping("/getStatus/{id}")
	public String GetStatus(@PathVariable Long id)
	{
		return doctorservice.status(id);
	}
	
}
