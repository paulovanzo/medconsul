package app.medconsul.controllers;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import app.medconsul.entities.Patient;
import app.medconsul.services.PatientService;

@RestController
@RequestMapping(value = "/api/v1", produces = "application/json")
@CrossOrigin
public class PatientController {

    @Autowired
    private PatientService patientService;

    @GetMapping(value = "/patients")
    public ResponseEntity<List<Patient>> listPatient(){
        List<Patient> docs = patientService.getAllPatient();
        return ResponseEntity.ok(docs);
    }

    @PostMapping(value = "/patient")
    public ResponseEntity<Patient> createPatient( @RequestBody Patient patient){
        return ResponseEntity.ok(patientService.save(patient));
    }
}