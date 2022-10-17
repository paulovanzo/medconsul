package app.medconsul.entities;

import java.util.List;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.JoinColumn;
import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.CascadeType;
import javax.persistence.FetchType;
import javax.persistence.ManyToOne;
import java.time.LocalDate;
import java.time.LocalTime;

import app.medconsul.entities.Patient;
import app.medconsul.entities.Doctor;
import app.medconsul.entities.Address;

@Entity
public class Appointment {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "patient_id")
    public Patient patient;

    @ManyToOne
    @JoinColumn(name = "doctor_id")
    public Doctor doctor;

    @Column(nullable = false)
    public LocalDate date;

    @Column(nullable = false)
    public LocalTime schedule;

    @ManyToOne
    @JoinColumn(name = "address_id")
    public Address address;

}
