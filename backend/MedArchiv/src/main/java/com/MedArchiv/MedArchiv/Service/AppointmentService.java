package com.MedArchiv.MedArchiv.Service;

import java.util.List;
import org.springframework.stereotype.Service;
import com.MedArchiv.MedArchiv.Model.Appointment;
import com.MedArchiv.MedArchiv.Model.Doctormessage;



@Service
public interface AppointmentService {
			public Appointment postAppointment(Appointment apt);
			public List<Appointment> GetAppointment(Long id);
			public Appointment GetAppointmentByid(long id);
			public List<Appointment> GetAppointmentByDoctorId(Long id);
			public Appointment updateAppointment(Long id,String time,String status);
			public Appointment updateAppointmentstatus(Long id,String status);
			public Appointment updateAppointmentmessage(long id,Doctormessage msg);
			
		}