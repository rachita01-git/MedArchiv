package com.MedArchiv.MedArchiv.Model;

import java.sql.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Appointment {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long id;
	private long patientId;
	private long DoctorId;
	private String pname;
	private String AppointmentTime;
	private Date createdAt;
	private String message;
	private String Status;
	private String Dmessage;
	public Appointment(long id, long patientId, long doctorId, String pname, String appointmentTime, Date createdAt,
			String message, String status, String dmessage) {
		super();
		this.id = id;
		this.patientId = patientId;
		DoctorId = doctorId;
		this.pname = pname;
		AppointmentTime = appointmentTime;
		this.createdAt = createdAt;
		this.message = message;
		Status = status;
		Dmessage = dmessage;
	}
	public Appointment() {
		super();
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public long getPatientId() {
		return patientId;
	}
	public void setPatientId(long patientId) {
		this.patientId = patientId;
	}
	public long getDoctorId() {
		return DoctorId;
	}
	public void setDoctorId(long doctorId) {
		DoctorId = doctorId;
	}
	public String getPname() {
		return pname;
	}
	public void setPname(String pname) {
		this.pname = pname;
	}
	public String getAppointmentTime() {
		return AppointmentTime;
	}
	public void setAppointmentTime(String appointmentTime) {
		AppointmentTime = appointmentTime;
	}
	public Date getCreatedAt() {
		return createdAt;
	}
	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public String getStatus() {
		return Status;
	}
	public void setStatus(String status) {
		Status = status;
	}
	public String getDmessage() {
		return Dmessage;
	}
	public void setDmessage(String dmessage) {
		Dmessage = dmessage;
	}
	@Override
	public String toString() {
		return "Appointment [id=" + id + ", patientId=" + patientId + ", DoctorId=" + DoctorId + ", pname=" + pname
				+ ", AppointmentTime=" + AppointmentTime + ", createdAt=" + createdAt + ", message=" + message
				+ ", Status=" + Status + ", Dmessage=" + Dmessage + "]";
	}
	
}
