package app.medconsul.services;

import java.util.List;

import app.medconsul.entities.Doctor;
import app.medconsul.repositories.IDoctorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DoctorService implements IDoctorService {
    
    private final IDoctorRepository doctorRepository;
    
    @Autowired
    public DoctorService(IDoctorRepository doctorRepository){
        this.doctorRepository = doctorRepository;
    }

    @Override
    public List<Doctor> getAllDoctor() {
        return doctorRepository.findAll();
    }

    @Override
    public Doctor save(Doctor doc) {
        return doctorRepository.save(doc);
    }

}
