package com.MedArchiv.MedArchiv.Controller;

import com.MedArchiv.MedArchiv.Model.Admin;
import com.MedArchiv.MedArchiv.Model.Doctor;
import com.MedArchiv.MedArchiv.Model.Patient;
import com.MedArchiv.MedArchiv.Service.AdminService;
import com.MedArchiv.MedArchiv.Service.DoctorService;
import com.MedArchiv.MedArchiv.Service.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/loginapi")
@CrossOrigin(origins = "*")
public class LoginController {

    @Autowired
    private AdminService adminService;

    @Autowired
    private DoctorService doctorService;

    @Autowired
    private PatientService patientService;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> loginRequest) {
        String email = loginRequest.get("email");
        String password = loginRequest.get("password");
        String userType = loginRequest.get("userType");

        Map<String, Object> response = new HashMap<>();

        switch (userType.toLowerCase()) {
            case "admin":
                Admin admin = adminService.loginAdmin(email, password);
                if (admin != null) {
                    response.put("status", "success");
                    response.put("userType", "admin");
                    response.put("userData", admin);
                    return ResponseEntity.ok(response);
                }
                break;

            case "doctor":
                Doctor doctor = doctorService.loginDoctor(email, password);
                if (doctor != null) {
                    response.put("status", "success");
                    response.put("userType", "doctor");
                    response.put("userData", doctor);
                    return ResponseEntity.ok(response);
                } else if (doctor != null) {
                    return ResponseEntity.status(403).body(Map.of("status", "error", "message", "Invalid user type"));
                }
                break;

            case "patient":
                Patient patient = patientService.loginPatient(email, password);
                if (patient != null) {
                    response.put("status", "success");
                    response.put("userType", "patient");
                    response.put("userData", patient);
                    return ResponseEntity.ok(response);
                }
                break;

            default:
                return ResponseEntity.badRequest().body(Map.of("status", "error", "message", "Invalid user type"));
        }

        return ResponseEntity.status(401).body(Map.of("status", "error", "message", "Invalid email or password"));
    }
}
