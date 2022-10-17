package app.medconsul.controllers;

import java.util.List;

import app.medconsul.entities.Patient;
import app.medconsul.services.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping(path = "/api/v1/patient")
public class PatientController {

    private final PatientService patientService;

    @Autowired
    public PatientController(PatientService patientService){
        this.patientService = patientService;
    } 

    @GetMapping(value = "/patients")
    public ResponseEntity<List<Patient>> Get(){
        List<Patient> docs = patientService.getAllPatient();
        return ResponseEntity.ok(docs);
    }

    @PostMapping(value = "/patient")
    public ResponseEntity<Patient> Post( @RequestBody Patient patient){
        return ResponseEntity.ok(patientService.save(patient));
    }
}