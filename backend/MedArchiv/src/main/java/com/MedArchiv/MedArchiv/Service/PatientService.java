package com.MedArchiv.MedArchiv.Service;

import org.springframework.stereotype.Service;
import com.MedArchiv.MedArchiv.Model.Patient;

@Service
public interface PatientService {
		public Patient readbyid(long id);
		public String getName(long id);
		Patient save(Patient patient);
	    Patient update(Patient patient);
	    void delete(Long id);
	    Iterable<Patient> findAll();
	    Patient loginPatient(String emailId, String password);
	    public Patient updatePatient(Integer id, Patient patientDetails);
	}
