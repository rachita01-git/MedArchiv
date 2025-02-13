package com.MedArchiv.MedArchiv.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.MedArchiv.MedArchiv.Model.Doctor;
import com.MedArchiv.MedArchiv.Repository.DoctorRepository;
@Service
public class DoctorServiceImplements implements DoctorService{

	@Autowired
	private DoctorRepository doctorRepository;
	@Override
    public Doctor readById(Long id) {
        return doctorRepository.findById(id).orElse(null);
    }

    @Override
    public Doctor save(Doctor doctor) {
        return doctorRepository.save(doctor);
    }

    @Override
    public Doctor update(Doctor doctor) {
        return doctorRepository.save(doctor);
    }

    @Override
    public void delete(Long id) {
        doctorRepository.deleteById(id);
    }

    @Override
    public Iterable<Doctor> findAll() {
        return doctorRepository.findAll();
    }

    @Override
    public Doctor loginDoctor(String emailId, String password) {
        return doctorRepository.findByEmailIdAndPassword(emailId, password).orElse(null);
    }

	@Override
	public List<Doctor> getAllDoctor() {
		return (List<Doctor>) doctorRepository.findAll();
	}
	public Doctor getDoctorById(Long id)
	{
			return doctorRepository.findById(id).orElse(null);
	}

	@Override
	public Doctor updateDoctorStatus(Long id,String Status) {
		Doctor res=doctorRepository.findById(id).orElse(null);
		res.setStatus(Status);
		return doctorRepository.save(res);
	}

	@Override
	public String status(long id) {
		Doctor d1=doctorRepository.findById(id).orElse(null);
		return d1.getStatus();
	}

}
