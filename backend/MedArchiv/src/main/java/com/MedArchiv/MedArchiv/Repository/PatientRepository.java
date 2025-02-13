package com.MedArchiv.MedArchiv.Repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.MedArchiv.MedArchiv.Model.Patient;


@Repository
public interface PatientRepository extends CrudRepository<Patient,Long>{

    Optional<Patient> findByEmailIdAndPassword(String emailId, String password);
    Optional<Patient> findByEmailId(String emailId);
    Optional<Patient> findById(Integer id);
}
