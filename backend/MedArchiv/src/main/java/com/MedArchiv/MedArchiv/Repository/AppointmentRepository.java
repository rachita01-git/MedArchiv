package com.MedArchiv.MedArchiv.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.MedArchiv.MedArchiv.Model.Appointment;

@Repository
public interface AppointmentRepository extends CrudRepository<Appointment,Long>{

	public List<Appointment> findAppointmentsByPatientId(Long id);
	@Query("select s from Appointment s where s.DoctorId = :id")
	public List<Appointment> findAppointmentsByDoctorId(Long id);
	
//	@Query("select s from Appointment s where s.patientId = :id")
//	public Appointment GetPaitentAppointmentByid(long id);
}
