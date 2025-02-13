package com.MedArchiv.MedArchiv.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.MedArchiv.MedArchiv.Model.Patient;
import com.MedArchiv.MedArchiv.Repository.PatientRepository;

@Service
public class PatientServiceImplements implements PatientService{

	@Autowired
	private PatientRepository patientRepository;
	@Override
	public Patient readbyid(long id) {
		return patientRepository.findById(id).orElse(null);
	}


	@Override
	public String getName(long id) {
		Patient p1=patientRepository.findById(id).orElse(null);
		String name=p1.getName();
		return name;
	}
	@Override
    public Patient save(Patient patient) {
        return patientRepository.save(patient);
    }

    @Override
    public Patient update(Patient patient) {
        if (patientRepository.existsById(patient.getId())) {
            return patientRepository.save(patient);
        } else {
            throw new RuntimeException("Patient not found with ID: " + patient.getId());
        }
    }

    @Override
    public void delete(Long id) {
        if (patientRepository.existsById(id)) {
            patientRepository.deleteById(id);
        } else {
            throw new RuntimeException("Patient not found with ID: " + id);
        }
    }

    @Override
    public Iterable<Patient> findAll() {
        return patientRepository.findAll();
    }
    @Override
    public Patient loginPatient(String emailId, String password) {
        return patientRepository.findByEmailIdAndPassword(emailId, password).orElse(null);
    }
    @Override
    public Patient updatePatient(Integer id, Patient patientDetails) {
        return patientRepository.findById(id).map(patient -> {
            
            patient.setEmailId(patientDetails.getEmailId());
            patient.setPhoneNumber(patientDetails.getPhoneNumber());
            patient.setDob(patientDetails.getDob());
            patient.setAge(patientDetails.getAge());
            patient.setGender(patientDetails.getGender());
            patient.setState(patientDetails.getState());
            patient.setCountry(patientDetails.getCountry());
            
            patient.setBloodGroup(patientDetails.getBloodGroup());
            patient.setAllergies(patientDetails.getAllergies());
            patient.setAnxietyAttack(patientDetails.getAnxietyAttack());
            patient.setBloodPressure(patientDetails.getBloodPressure());
            patient.setBreathingProblem(patientDetails.getBreathingProblem());
            patient.setHeight(patientDetails.getHeight());
            patient.setWeight(patientDetails.getWeight());
            patient.setDiabetes(patientDetails.getDiabetes());
            patient.setDisease(patientDetails.getDisease());
            patient.setKidneyProblem(patientDetails.getKidneyProblem());
            patient.setHeartProblem(patientDetails.getHeartProblem());
            patient.setDrugUse(patientDetails.getDrugUse());
           
            
            return patientRepository.save(patient);
        }).orElse(null);
    }


}
