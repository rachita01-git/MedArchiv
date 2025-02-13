package com.MedArchiv.MedArchiv.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.MedArchiv.MedArchiv.Model.Patient;
import com.MedArchiv.MedArchiv.Service.PatientService;

@RestController
@RequestMapping("/Patientapi")
@CrossOrigin("*")
public class PatientController {

	@Autowired
	private PatientService patientService;
	
	@GetMapping("/getname/{id}")
	public String getPatientName(@PathVariable long id)
	{
		return patientService.getName(id);
	}
	@GetMapping("/getdata/{id}")
	public Patient getPatientData(@PathVariable long id)
	{
		return patientService.readbyid(id);
	}
    @PatchMapping("updatePatient/{id}")
    public ResponseEntity<Patient> updatePatient(@PathVariable Integer id, @RequestBody Patient patientDetails) {
        Patient updatedPatient = patientService.updatePatient(id, patientDetails);
        return updatedPatient != null ? ResponseEntity.ok(updatedPatient) : ResponseEntity.notFound().build();
    }
	
}
