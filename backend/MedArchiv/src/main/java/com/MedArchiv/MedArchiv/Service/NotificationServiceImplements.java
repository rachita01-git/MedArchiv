package com.MedArchiv.MedArchiv.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.MedArchiv.MedArchiv.Model.Appointment;
import com.MedArchiv.MedArchiv.Model.Notification;
import com.MedArchiv.MedArchiv.Repository.NotificatioRepository;

@Service
public class NotificationServiceImplements implements NotificationService {

	@Autowired
	private NotificatioRepository notificationRepository;

	@Override
	public Notification AddNotification(Notification notify) {
		return notificationRepository.save(notify);
	}

	@Override
	public List<Notification> GetNotificationById(long id) {
		return notificationRepository.findByPId(id);
	}

	@Override
	public List<Notification> GetNotificationBydoctorId(long id) {
		return notificationRepository.findByDId(id);
	}

	@Override
	public Notification updateNotification(Long id, String time,String status) {	
		      
		Notification optionalNotification= notificationRepository.findByAppointmentID(id);
		optionalNotification.setStatus(status);
		optionalNotification.setAppointmentTime(time);
			return notificationRepository.save(optionalNotification);
//		return null;
	
	}

	@Override
	public Notification updateNotificationstatus(long id, String status) {
		Notification optionalNotification= notificationRepository.findByAppointmentID(id);
		optionalNotification.setStatus(status);
		return notificationRepository.save(optionalNotification);
	}
	
	

}
