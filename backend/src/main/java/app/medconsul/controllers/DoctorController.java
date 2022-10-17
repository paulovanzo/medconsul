package app.medconsul.controllers;

import java.util.List;

import app.medconsul.entities.Doctor;
import app.medconsul.services.DoctorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;


@RestController
@RequestMapping(path = "/api/v1")
public class DoctorController {

    private final DoctorService doctorService;

    @Autowired
    public DoctorController(DoctorService doctorService) {
        this.doctorService = doctorService;
    }

    @GetMapping(value = "/doctors")
    public ResponseEntity<List<Doctor>> listDoctors(){
        List<Doctor> docs = doctorService.getAllDoctor();
        return ResponseEntity.ok(docs);
    }

    @PostMapping(value = "/doctor")
    public ResponseEntity<Doctor> createDoctor( @RequestBody Doctor doctor){
        Doctor doc = new Doctor();
        System.out.println(doc);
        try {
            doc = doctorService.save(new Doctor(doctor.getName(),doctor.getCrm(),doctor.getPhoneNumber(),doctor.getSpecialty(),doctor.getAddresses()));
            return new ResponseEntity<>(doc,HttpStatus.CREATED);
        }catch(Exception e){
            return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
