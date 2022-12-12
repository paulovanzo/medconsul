package app.medconsul.controllers;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import app.medconsul.entities.Appointment;
import app.medconsul.services.AppointmentService;

@RestController
@RequestMapping(value = "/api/v1", produces = "application/json")
@CrossOrigin
public class AppointmentController {

    @Autowired
    private AppointmentService appointmentService;

    @GetMapping(value = "/appointments")
    public ResponseEntity<List<Appointment>> listAppointment(){
        List<Appointment> docs = appointmentService.getAllAppointment();
        return ResponseEntity.ok(docs);
    }

    @PostMapping(value = "/appointment")
    public ResponseEntity<Appointment> createAppointment( @RequestBody Appointment appointment){
        return ResponseEntity.ok(appointmentService.save(appointment));
    }

    @DeleteMapping(value = "/appointment/{id}")
    public ResponseEntity<Void> delete(@PathVariable long id){
        appointmentService.delete(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}