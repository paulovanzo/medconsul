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
}