package com.MedArchiv.MedArchiv.Controller;

import com.MedArchiv.MedArchiv.Model.Doctor;
import com.MedArchiv.MedArchiv.Service.DoctorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/doctordashboardapi")
@CrossOrigin("*")
public class DoctorDashboardController {

    @Autowired
    private DoctorService doctorService;

    @PostMapping("/register")
    public ResponseEntity<Doctor> registerDoctor(@RequestBody Doctor doctor) {
        Doctor savedDoctor = doctorService.save(doctor);
        return ResponseEntity.ok(savedDoctor);
    }

//    @PostMapping("/login")
//    public ResponseEntity<?> loginDoctor(@RequestBody Doctor loginRequest) {
//        String emailId = loginRequest.getEmailId();
//        String password = loginRequest.getPassword();
//
//        Doctor doctor = doctorService.loginDoctor(emailId, password);
//        if (doctor != null) {
//            return ResponseEntity.ok(doctor);  
//        } else {
//            return ResponseEntity.status(401).body("Invalid email or password.");
//        }
//    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getDoctorById(@PathVariable Long id) {
        Doctor doctor = doctorService.readById(id);
        if (doctor != null) {
            return ResponseEntity.ok(doctor);
        } else {
            return ResponseEntity.status(404).body("Doctor not found");
        }
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<?> updateDoctor(@PathVariable Long id, @RequestBody Doctor updatedDoctor) {
        Doctor existingDoctor = doctorService.readById(id);
        if (existingDoctor != null) {
            updatedDoctor.setId(id);
            updatedDoctor.setEmailId(existingDoctor.getEmailId());  

            Doctor savedDoctor = doctorService.update(updatedDoctor);
            return ResponseEntity.ok(savedDoctor);
        } else {
            return ResponseEntity.status(404).body("Doctor not found");
        }
    }
}
