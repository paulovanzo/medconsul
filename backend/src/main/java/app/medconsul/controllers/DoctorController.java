package app.medconsul.controllers;

import java.util.List;

import app.medconsul.entities.Doctor;
import app.medconsul.services.DoctorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@RestController
@RequestMapping("/api/v1")
public class DoctorController {

    @Autowired
    private DoctorService doctorService;

    @RequestMapping(value = "/doctors", produces = "application/json", method = RequestMethod.GET)
    public ResponseEntity<List<Doctor>> doctors(){
        List<Doctor> docs = doctorService.getAllDoctor();
        return ResponseEntity.ok(docs);
    }
    

    @RequestMapping(value = "/doctor", consumes = "application/json", method = RequestMethod.POST)
    public ResponseEntity<Doctor> doctor( @RequestBody Doctor doctor) throws Exception {
        System.out.println(doctor);
        return ResponseEntity.ok(doctorService.save(doctor));
    }
    
}