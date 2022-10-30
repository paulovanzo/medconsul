package app.medconsul.services;

import java.util.List;

import app.medconsul.entities.Doctor;
import app.medconsul.entities.DTO.DoctorDTO;

public interface IDoctorService {
    List<Doctor> getAllDoctor();
    Doctor save(DoctorDTO doc);
    Doctor edit(DoctorDTO doc);
}
