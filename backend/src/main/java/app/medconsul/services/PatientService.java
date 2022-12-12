package app.medconsul.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import app.medconsul.entities.DTO.PatientDTO;
import app.medconsul.entities.Patient;
import app.medconsul.repositories.IPatientRepository;

@Service
public class PatientService implements IPatientService {

    @Autowired
    private IPatientRepository patientRepository;

    @Override
    public List<Patient> getAllPatient() {
        return patientRepository.findAll();
    }

    @Override
    public Patient save(Patient patient) {
        Patient pat = new Patient(patient.getName(),patient.getEmail(),patient.getPhoneNumber());

        return patientRepository.save(pat);
    }

    public Patient edit(PatientDTO tmpPatient) {
        Patient pat = patientRepository.findById(tmpPatient.getId()).orElseThrow(IllegalArgumentException::new);
        pat.setName(tmpPatient.getName());
        pat.setEmail(tmpPatient.getEmail());
        pat.setPhoneNumber(tmpPatient.getPhoneNumber());
        pat.setUrlImage(tmpPatient.getUrlImage());

        return patientRepository.save(pat);
    }

    public Patient findById(Long id){
        return patientRepository.findById(id).orElseThrow(IllegalArgumentException::new);
    } 

    public void delete(long id){
        patientRepository.deleteById(id);
    }
}
