package com.MedArchiv.MedArchiv.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.MedArchiv.MedArchiv.Model.Notification;

@Repository
public interface NotificatioRepository extends JpaRepository<Notification, Long>{


	public List<Notification> findByPId(long pId);
	 public List<Notification> findByDId(long DId);
	 
	 @Query("select s from Notification s where s.AId=:id")
	 public Notification findByAppointmentID(long id);

}
