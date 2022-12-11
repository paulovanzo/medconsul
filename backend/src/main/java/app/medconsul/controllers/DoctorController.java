package app.medconsul.controllers;

import java.util.List;

import app.medconsul.entities.DTO.DoctorDTO;
import app.medconsul.entities.Doctor;
import app.medconsul.services.DoctorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin
public class DoctorController {

    @Autowired
    private DoctorService doctorService;

    @GetMapping(value = "/doctors", produces = "application/json")
    public ResponseEntity<List<Doctor>> listDoctors(){
        List<Doctor> docs = doctorService.getAllDoctor();
        return ResponseEntity.ok(docs);
    }
    

    @PostMapping(value = "/doctor", consumes = "application/json")
    public ResponseEntity<Doctor> createDoctor( @RequestBody DoctorDTO doctor){
        return ResponseEntity.ok(doctorService.save(doctor));
    }
    
    @PutMapping(value = "/doctor/{id}", produces = "application/json", consumes = "application/json")
    public ResponseEntity<Doctor> editDoctor(@PathVariable long id, @RequestBody DoctorDTO doctor){
        return ResponseEntity.ok(doctorService.edit(doctor));
    }

    @GetMapping(value = "/doctor/{id}", produces = "application/json")
    public ResponseEntity<Doctor> editDoctor(@PathVariable long id){
        return ResponseEntity.ok(doctorService.findById(id));
    }

    @DeleteMapping(value = "/doctor/{id}")
    public ResponseEntity<Void> delete(@PathVariable long id){
        doctorService.delete(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}