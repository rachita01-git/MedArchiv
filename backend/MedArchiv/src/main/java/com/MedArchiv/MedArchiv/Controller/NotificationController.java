package com.MedArchiv.MedArchiv.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.MedArchiv.MedArchiv.Model.Appointment;
import com.MedArchiv.MedArchiv.Model.Notification;
import com.MedArchiv.MedArchiv.Service.NotificationService;

@RestController
@RequestMapping("/Notificationapi")
@CrossOrigin("*")
public class NotificationController {

	@Autowired
	private NotificationService notificationService;
	
	@PostMapping("/Notifications")
	public Notification AddNotification(@RequestBody Notification notify)
	{
		System.out.println(notify);
		return notificationService.AddNotification(notify);
	}
	@GetMapping("/Notification/{id}")
	public List<Notification> NotificationById(@PathVariable long id)
	{
		return notificationService.GetNotificationById(id);
	}
	
	@GetMapping("/NotificationByDoctor/{id}")
	public List<Notification> NotificationByDoctorId(@PathVariable long id)
	{
		return notificationService.GetNotificationBydoctorId(id);
	}
	
	@GetMapping("/updateNotification/{id}/{time}/{status}")
	public Notification updateNotification(@PathVariable long id,@PathVariable String time,@PathVariable String status)
	{
		return notificationService.updateNotification(id, time, status);
	}
	
	@GetMapping("/updateNotificationstatus/{id}/{status}")
	public Notification updateNotification(@PathVariable long id,@PathVariable String status)
	{
		return notificationService.updateNotificationstatus(id,status);
	}
	
}
