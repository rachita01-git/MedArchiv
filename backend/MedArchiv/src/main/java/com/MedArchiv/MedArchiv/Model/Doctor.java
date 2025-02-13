package com.MedArchiv.MedArchiv.Model;

import java.sql.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Doctor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;

    @Column(unique = true)
    private String emailId;
    
    private String password;

    @Column(unique = true)
    private String phoneNo;

    private String specialization;
    private String qualification;
    private String experience;

    @Column(unique = true)
    private String licenceNumber;

    private Date createdDate;
    private Date dob;
    private int age;
    private String gender;
    private String areaOfPractice;
    private String state;
    private String country;
    private String aboutDoctor;
    private Long patientCount;
    private Long appointmentCount;
	private int rating;
	private String status;
	public Doctor(Long id, String name, String emailId, String password, String phoneNo, String specialization,
			String qualification, String experience, String licenceNumber, Date createdDate, Date dob, int age,
			String gender, String areaOfPractice, String state, String country, String aboutDoctor, Long patientCount,
			Long appointmentCount, int rating, String status) {
		super();
		this.id = id;
		this.name = name;
		this.emailId = emailId;
		this.password = password;
		this.phoneNo = phoneNo;
		this.specialization = specialization;
		this.qualification = qualification;
		this.experience = experience;
		this.licenceNumber = licenceNumber;
		this.createdDate = createdDate;
		this.dob = dob;
		this.age = age;
		this.gender = gender;
		this.areaOfPractice = areaOfPractice;
		this.state = state;
		this.country = country;
		this.aboutDoctor = aboutDoctor;
		this.patientCount = patientCount;
		this.appointmentCount = appointmentCount;
		this.rating = rating;
		this.status = status;
	}
	public Doctor() {
		super();
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmailId() {
		return emailId;
	}
	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getPhoneNo() {
		return phoneNo;
	}
	public void setPhoneNo(String phoneNo) {
		this.phoneNo = phoneNo;
	}
	public String getSpecialization() {
		return specialization;
	}
	public void setSpecialization(String specialization) {
		this.specialization = specialization;
	}
	public String getQualification() {
		return qualification;
	}
	public void setQualification(String qualification) {
		this.qualification = qualification;
	}
	public String getExperience() {
		return experience;
	}
	public void setExperience(String experience) {
		this.experience = experience;
	}
	public String getLicenceNumber() {
		return licenceNumber;
	}
	public void setLicenceNumber(String licenceNumber) {
		this.licenceNumber = licenceNumber;
	}
	public Date getCreatedDate() {
		return createdDate;
	}
	public void setCreatedDate(Date createdDate) {
		this.createdDate = createdDate;
	}
	public Date getDob() {
		return dob;
	}
	public void setDob(Date dob) {
		this.dob = dob;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getAreaOfPractice() {
		return areaOfPractice;
	}
	public void setAreaOfPractice(String areaOfPractice) {
		this.areaOfPractice = areaOfPractice;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
	public String getAboutDoctor() {
		return aboutDoctor;
	}
	public void setAboutDoctor(String aboutDoctor) {
		this.aboutDoctor = aboutDoctor;
	}
	public Long getPatientCount() {
		return patientCount;
	}
	public void setPatientCount(Long patientCount) {
		this.patientCount = patientCount;
	}
	public Long getAppointmentCount() {
		return appointmentCount;
	}
	public void setAppointmentCount(Long appointmentCount) {
		this.appointmentCount = appointmentCount;
	}
	public int getRating() {
		return rating;
	}
	public void setRating(int rating) {
		this.rating = rating;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
		
	
}
