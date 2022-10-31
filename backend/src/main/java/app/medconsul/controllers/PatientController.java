package app.medconsul.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import app.medconsul.entities.Patient;
import app.medconsul.entities.DTO.PatientDTO;
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

    @PutMapping(value = "/patient/{id}", produces = "application/json", consumes = "application/json")
    public ResponseEntity<Patient> editPatient(@PathVariable long id, @RequestBody PatientDTO patient){
        return ResponseEntity.ok(patientService.edit(patient));
    }

    @GetMapping(value = "/patient/{id}", produces = "application/json")
    public ResponseEntity<Patient> getPatient(@PathVariable long id){
        return ResponseEntity.ok(patientService.findById(id));
    }
}