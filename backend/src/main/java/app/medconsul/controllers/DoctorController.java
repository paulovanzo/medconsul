package app.medconsul.controllers;

import java.util.List;

import app.medconsul.entities.Doctor;
import app.medconsul.services.DoctorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("/api/v1")
public class DoctorController {

    @Autowired
    private DoctorService doctorService;

    @GetMapping(value = "/doctors", produces = "application/json")
    public ResponseEntity<List<Doctor>> doctors(){
        List<Doctor> docs = doctorService.getAllDoctor();
        return ResponseEntity.ok(docs);
    }
    

    @PostMapping(value = "/doctor", consumes = "application/json")
    public ResponseEntity<Doctor> doctor( @RequestBody Doctor doctor) throws Exception {
        System.out.println(doctor);
        return ResponseEntity.ok(doctorService.save(doctor));
    }
    
}