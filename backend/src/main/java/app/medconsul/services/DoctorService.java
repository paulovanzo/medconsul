package app.medconsul.services;

import java.util.List;

import javax.transaction.Transactional;

import app.medconsul.entities.Doctor;
import app.medconsul.services.IDoctorService;
import app.medconsul.repositories.IDoctorRepository;
import org.springframework.beans.factory.annotation.Autowired;

public class DoctorService implements IDoctorService {

    @Autowired
    private IDoctorRepository DoctorRepository;

    @Override
    public List<Doctor> getAllDoctor() {
        return DoctorRepository.findAll();
    }

    @Transactional
    public Doctor save(Doctor doc) {
        return DoctorRepository.save(doc);
    }

}
