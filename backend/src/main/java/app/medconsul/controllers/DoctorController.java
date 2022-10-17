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
public class DoctorController {

    private final DoctorService doctorService;

    @Autowired
    public DoctorController(DoctorService doctorService) {
        this.doctorService = doctorService;
    }

    @RequestMapping(value = "/doctors", method = RequestMethod.GET)
    public ResponseEntity<List<Doctor>> Get(){
        List<Doctor> docs = doctorService.getAllDoctor();
        return ResponseEntity.ok(docs);
    }
    

    @RequestMapping(value = "/doctor", method = RequestMethod.POST)
    public ResponseEntity<Doctor> Post( @RequestBody Doctor doctor){
        Doctor doc = doctorService.save(new Doctor(doctor.getName(),doctor.getCrm(),doctor.getPhoneNumber(),doctor.getSpecialty(),doctor.getAddresses()));
        System.out.println(doc);
        return ResponseEntity.ok(doc);
    }
    
}
