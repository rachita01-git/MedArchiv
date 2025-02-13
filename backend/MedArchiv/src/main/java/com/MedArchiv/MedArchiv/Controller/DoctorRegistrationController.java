package com.MedArchiv.MedArchiv.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.MedArchiv.MedArchiv.Model.Doctor;
import com.MedArchiv.MedArchiv.Service.DoctorService;

@RestController
@RequestMapping("/doctorapilogin")
@CrossOrigin("*")
public class DoctorRegistrationController {

    @Autowired
    private DoctorService doctorService;

    @PostMapping("/register")
    public Doctor registerDoctor(@RequestBody Doctor doctor) {
        return doctorService.save(doctor);
    }

    @GetMapping("/{id}")
    public Doctor getDoctorById(@PathVariable Long id) {
        return doctorService.readById(id);
    }

    @GetMapping("/all")
    public Iterable<Doctor> getAllDoctors() {
        return doctorService.findAll();
    }

    @DeleteMapping("/{id}")
    public void deleteDoctor(@PathVariable Long id) {
        doctorService.delete(id);
    }
}
