package app.medconsul.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import app.medconsul.entities.Doctor;
import app.medconsul.entities.DTO.DoctorDTO;
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
    public Doctor save(DoctorDTO doc) {
        Doctor newDoctor = new Doctor(doc.getName(),doc.getCrm(),doc.getPhoneNumber(),doc.getSpeciality());
        return doctorRepository.save(newDoctor);
    }

    @Override
    public Doctor edit(DoctorDTO tempDoc) {
        Doctor doc = doctorRepository.findByName(tempDoc.getName());
        doc.setName(tempDoc.getName());
        doc.setCrm(tempDoc.getCrm());
        doc.setPhoneNumber(tempDoc.getPhoneNumber());
        doc.setSpeciality(tempDoc.getSpeciality());

        return doctorRepository.save(doc);
    }

    public Doctor findById(Long id){
        return doctorRepository.findById(id).orElseThrow(IllegalArgumentException::new);
    }

}
