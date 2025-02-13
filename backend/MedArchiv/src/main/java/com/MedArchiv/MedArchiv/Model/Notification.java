package com.MedArchiv.MedArchiv.Model;

import java.sql.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Notification {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long Id;
	private long DId;
	private long pId;
	private String Dname;
	private String Pname;
	private String AppointmentTime;
	private Date CreatedAt;
	private String status;
	private long AId;
	public long getId() {
		return Id;
	}
	public void setId(long id) {
		Id = id;
	}
	public long getDoctorId() {
		return DId;
	}
	public void setDoctorId(long doctorId) {
		DId = doctorId;
	}
	public long getpId() {
		return pId;
	}
	public void setpId(long pId) {
		this.pId = pId;
	}
	public String getDname() {
		return Dname;
	}
	public void setDname(String dname) {
		Dname = dname;
	}
	public String getPname() {
		return Pname;
	}
	public void setPname(String pname) {
		Pname = pname;
	}
	public String getAppointmentTime() {
		return AppointmentTime;
	}
	public void setAppointmentTime(String appointmentTime) {
		AppointmentTime = appointmentTime;
	}
	public Date getCreatedAt() {
		return CreatedAt;
	}
	public void setCreatedAt(Date createdAt) {
		CreatedAt = createdAt;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public long getAppointmentId() {
		return AId;
	}
	public void setAppointmentId(long appointmentId) {
		AId = appointmentId;
	}
	public Notification(long id, long doctorId, long pId, String dname, String pname, String appointmentTime,
			Date createdAt, String status, long appointmentId) {
		super();
		Id = id;
		DId = doctorId;
		this.pId = pId;
		Dname = dname;
		Pname = pname;
		AppointmentTime = appointmentTime;
		CreatedAt = createdAt;
		this.status = status;
		AId = appointmentId;
	}
	public Notification() {
		super();
	}
	@Override
	public String toString() {
		return "Notification [Id=" + Id + ", DoctorId=" + DId + ", pId=" + pId + ", Dname=" + Dname + ", Pname="
				+ Pname + ", AppointmentTime=" + AppointmentTime + ", CreatedAt=" + CreatedAt + ", status=" + status
				+ ", AppointmentId=" + AId + "]";
	}
	
}
