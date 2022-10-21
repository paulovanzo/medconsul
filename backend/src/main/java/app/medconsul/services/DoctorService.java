package app.medconsul.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import app.medconsul.entities.Doctor;
import app.medconsul.repositories.IDoctorRepository;

@Service
public class DoctorService implements IDoctorService {
    
    @Autowired
    private IDoctorRepository doctorRepository;

    @Override
    public List<Doctor> getAllDoctor() {
        return doctorRepository.findAll();
    }

    @Override
    public Doctor save(Doctor doc) {
        return doctorRepository.save(doc);
    }

}
