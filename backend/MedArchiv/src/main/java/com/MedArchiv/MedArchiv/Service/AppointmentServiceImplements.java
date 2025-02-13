package com.MedArchiv.MedArchiv.Service;

import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.MedArchiv.MedArchiv.Model.Appointment;
import com.MedArchiv.MedArchiv.Model.Doctormessage;
import com.MedArchiv.MedArchiv.Repository.AppointmentRepository;

@Service
public class AppointmentServiceImplements implements AppointmentService {
	
	@Autowired
	private AppointmentRepository appointmentRepository;
	
	public Appointment postAppointment(Appointment apt)
	{
		return appointmentRepository.save(apt);
	}

	@Override
	public List<Appointment> GetAppointment(Long id) {
		return appointmentRepository.findAppointmentsByPatientId(id);
	}

	@Override
	public Appointment GetAppointmentByid(long id) {
		return appointmentRepository.findById(id).orElse(null);
	}

	@Override
	public List<Appointment> GetAppointmentByDoctorId(Long id) {
		return appointmentRepository.findAppointmentsByDoctorId(id);
	}
//
//	@Override
//	public Appointment GetPaitentAppointmentByid(long id) {
//		return appointmentRepository.GetPaitentAppointmentByid(id);
//	}

	
	@Override
	public Appointment updateAppointment(Long id, String time,String status) {	
		      
		Appointment optionalAppointment= appointmentRepository.findById(id).orElse(null);
		optionalAppointment.setStatus(status);
		optionalAppointment.setAppointmentTime(time);
			return appointmentRepository.save(optionalAppointment);
	
	}

	@Override
	public Appointment updateAppointmentstatus(Long id, String status) {
		Appointment PreAppointment=appointmentRepository.findById(id).orElse(null);
		PreAppointment.setStatus(status);
		return appointmentRepository.save(PreAppointment);
	}

	@Override
	public Appointment updateAppointmentmessage(long id ,Doctormessage msg) {
		Appointment appoint=appointmentRepository.findById(id).orElse(null);
		appoint.setDmessage(msg.getMessage());
		System.out.println(msg.getMessage());
		return appointmentRepository.save(appoint);
	}
}
