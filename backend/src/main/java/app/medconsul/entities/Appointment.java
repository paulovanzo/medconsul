package app.medconsul.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.JoinColumn;
import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Objects;

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

    public Appointment(Patient patient, Doctor doctor, LocalDate date, LocalTime schedule, Address address) {
        this.patient = patient;
        this.doctor = doctor;
        this.date = date;
        this.schedule = schedule;
        this.address = address;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Appointment that)) return false;
        return id.equals(that.id) && Objects.equals(patient, that.patient) && Objects.equals(doctor, that.doctor) && Objects.equals(date, that.date) && Objects.equals(schedule, that.schedule) && Objects.equals(address, that.address);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, patient, doctor, date, schedule, address);
    }

    @Override
    public String toString() {
        return "Appointment{" +
                "id=" + id +
                ", patient=" + patient +
                ", doctor=" + doctor +
                ", date=" + date +
                ", schedule=" + schedule +
                ", address=" + address +
                '}';
    }
}
