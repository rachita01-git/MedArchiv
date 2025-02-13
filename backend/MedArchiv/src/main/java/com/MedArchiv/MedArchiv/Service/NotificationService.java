package com.MedArchiv.MedArchiv.Service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.MedArchiv.MedArchiv.Model.Appointment;
import com.MedArchiv.MedArchiv.Model.Notification;

@Service
public interface NotificationService {
	
	public Notification AddNotification(Notification notify);
	public List<Notification> GetNotificationById(long id);
	public List<Notification> GetNotificationBydoctorId(long id);
	public Notification updateNotification(Long id,String time,String status);
	public Notification updateNotificationstatus(long id,String status);
}
