package com.MedArchiv.MedArchiv.Model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Admin {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;  

    @Column(name = "email_id", unique = true)
    private String emailId;  

    @Column(name = "name")
    private String name;  

    @Column(name = "password")
    private String password;  

    @Column(name = "doctor_count")
    private long doctorCount;

    @Column(name = "patient_count")
    private long patientCount;  

    public Admin(long id, String emailId, String name, String password, long doctorCount, long patientCount) {
        this.id = id;
        this.emailId = emailId;
        this.name = name;
        this.password = password;
        this.doctorCount = doctorCount;
        this.patientCount = patientCount;
    }

    public Admin() {
    }

    public long getId() {
        return id;
    }

    public String getEmailId() {
        return emailId;
    }

    public void setEmailId(String emailId) {
        this.emailId = emailId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public long getDoctorCount() {
        return doctorCount;
    }

    public void setDoctorCount(long doctorCount) {
        this.doctorCount = doctorCount;
    }

    public long getPatientCount() {
        return patientCount;
    }

    public void setPatientCount(long patientCount) {
        this.patientCount = patientCount;
    }

    @Override
    public String toString() {
        return "Admin [id=" + id + ", emailId=" + emailId + ", name=" + name + ", password=" + password
                + ", doctorCount=" + doctorCount + ", patientCount=" + patientCount + "]";
    }
}
