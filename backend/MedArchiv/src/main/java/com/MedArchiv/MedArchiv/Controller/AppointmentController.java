package com.MedArchiv.MedArchiv.Controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.MedArchiv.MedArchiv.Model.Appointment;
import com.MedArchiv.MedArchiv.Model.Doctormessage;
import com.MedArchiv.MedArchiv.Service.AppointmentService;

@RestController
@RequestMapping("/Appointmentapi")
@CrossOrigin("*")
public class AppointmentController {

	@Autowired
	private AppointmentService appointmentservice;
	
	@PostMapping("/Appointment")
	public Appointment postAppointment(@RequestBody Appointment apt)
	{
		return appointmentservice.postAppointment(apt);
	}
	@GetMapping("/PaitentAppointment/{id}")
	public List<Appointment> GetAppointment( @PathVariable Long id)
	{
		return appointmentservice.GetAppointment(id);
	}
	@GetMapping("/PaitentAppointmentBy/{Aid}")
	public Appointment GetAppointmentById( @PathVariable Long Aid)
	{
		return appointmentservice.GetAppointmentByid(Aid);
	}
//	@GetMapping("/PaitentAppointmentByid/{Aid}")
//	public Appointment GetPaitentAppointmentById( @PathVariable Long Aid)
//	{
//		return appointmentservice.GetPaitentAppointmentByid(Aid);
//	}
	
	@GetMapping("/DoctorAppointmentBy/{id}")
	public  List<Appointment> GetAppointmentByDoctorId( @PathVariable Long id)
	{
		return appointmentservice.GetAppointmentByDoctorId(id);
	}
	
	
	@GetMapping("/updateAppoinment/{id}/{time}/{status}")
	public Appointment updateAppointment(@PathVariable long id,@PathVariable String time,@PathVariable String status)
	{
		return appointmentservice.updateAppointment(id, time, status);
	}
	@GetMapping("/updateAppoinmentstatus/{id}/{status}")
	public Appointment updateAppointmentStatus(@PathVariable long id,@PathVariable String status)
	{
		return appointmentservice.updateAppointmentstatus(id, status);
	}
	
	@PatchMapping("/updateAppoinmentmessage/{id}")
	public Appointment updateAppointmentmessage(@PathVariable long id,@RequestBody Doctormessage mgs)
	{
		System.out.println(mgs.getMessage());
		return appointmentservice.updateAppointmentmessage(id, mgs);
	}
	
	
}

