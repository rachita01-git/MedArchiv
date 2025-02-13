package com.MedArchiv.MedArchiv.Model;

import java.sql.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Patient {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;  
    
    @Column(unique = true, name = "email_id")  
    private String emailId;  

    @Column(name = "password")
    private String password;

    @Column(unique = true)
    private String phoneNumber;

    private String name;
    private Date dob;  
    private int age;
    private String gender;
    private String state;
    private String country;
    private int weight;
    private int height;
    private String bloodGroup;
    private String bloodPressure;
    private String diabetes;
    private String allergies;
    private String disease;
    private String kidneyProblem;
    private String heartProblem;
    private String drugUse;
    private String anxietyAttack;
    private String breathingProblem;
    
	public Patient(long id, String emailId, String password, String phoneNumber, String name, Date dob, int age,
			String gender, String state, String country, int weight, int height, String bloodGroup,
			String bloodPressure, String diabetes, String allergies, String disease, String kidneyProblem,
			String heartProblem, String drugUse, String anxietyAttack, String breathingProblem) {
		super();
		this.id = id;
		this.emailId = emailId;
		this.password = password;
		this.phoneNumber = phoneNumber;
		this.name = name;
		this.dob = dob;
		this.age = age;
		this.gender = gender;
		this.state = state;
		this.country = country;
		this.weight = weight;
		this.height = height;
		this.bloodGroup = bloodGroup;
		this.bloodPressure = bloodPressure;
		this.diabetes = diabetes;
		this.allergies = allergies;
		this.disease = disease;
		this.kidneyProblem = kidneyProblem;
		this.heartProblem = heartProblem;
		this.drugUse = drugUse;
		this.anxietyAttack = anxietyAttack;
		this.breathingProblem = breathingProblem;
	}

	public Patient() {
		super();
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
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

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
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

	public int getWeight() {
		return weight;
	}

	public void setWeight(int weight) {
		this.weight = weight;
	}

	public int getHeight() {
		return height;
	}

	public void setHeight(int height) {
		this.height = height;
	}

	public String getBloodGroup() {
		return bloodGroup;
	}

	public void setBloodGroup(String bloodGroup) {
		this.bloodGroup = bloodGroup;
	}

	public String getBloodPressure() {
		return bloodPressure;
	}

	public void setBloodPressure(String bloodPressure) {
		this.bloodPressure = bloodPressure;
	}

	public String getDiabetes() {
		return diabetes;
	}

	public void setDiabetes(String diabetes) {
		this.diabetes = diabetes;
	}

	public String getAllergies() {
		return allergies;
	}

	public void setAllergies(String allergies) {
		this.allergies = allergies;
	}

	public String getDisease() {
		return disease;
	}

	public void setDisease(String disease) {
		this.disease = disease;
	}

	public String getKidneyProblem() {
		return kidneyProblem;
	}

	public void setKidneyProblem(String kidneyProblem) {
		this.kidneyProblem = kidneyProblem;
	}

	public String getHeartProblem() {
		return heartProblem;
	}

	public void setHeartProblem(String heartProblem) {
		this.heartProblem = heartProblem;
	}

	public String getDrugUse() {
		return drugUse;
	}

	public void setDrugUse(String drugUse) {
		this.drugUse = drugUse;
	}

	public String getAnxietyAttack() {
		return anxietyAttack;
	}

	public void setAnxietyAttack(String anxietyAttack) {
		this.anxietyAttack = anxietyAttack;
	}

	public String getBreathingProblem() {
		return breathingProblem;
	}

	public void setBreathingProblem(String breathingProblem) {
		this.breathingProblem = breathingProblem;
	}
    
	
}
