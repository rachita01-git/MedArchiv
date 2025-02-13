package com.MedArchiv.MedArchiv.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.MedArchiv.MedArchiv.Model.Doctor;


@Repository
public interface DoctorRepository extends CrudRepository<Doctor,Long>{

//	@Query("select s from Doctor s where s.EmailId = :emailId and s.Password =:password")
	Optional<Doctor> findByEmailIdAndPassword(String emailId, String password);
    Doctor findByEmailId(String emailId);
}
