package com.MedArchiv.MedArchiv.Controller;

import com.MedArchiv.MedArchiv.Model.Patient;
import com.MedArchiv.MedArchiv.Service.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/patientloginapi")
@CrossOrigin(origins = "*")  
public class PatientRegistrationController {

    @Autowired
    private PatientService patientService;

    @PostMapping("/register")
    public ResponseEntity<?> registerPatient(@RequestBody Patient patient) {
        try {
            Patient savedPatient = patientService.save(patient);
            return ResponseEntity.ok(Map.of("message", "Patient registered successfully!", "id", savedPatient.getId()));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(Map.of("message", "Registration failed: " + e.getMessage()));
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getPatientById(@PathVariable Long id) { 
        Patient patient = patientService.readbyid(id);
        if (patient != null) {
            return ResponseEntity.ok(patient);
        } else {
            return ResponseEntity.status(404).body(Map.of("message", "Patient not found with ID: " + id));
        }
    }
}
