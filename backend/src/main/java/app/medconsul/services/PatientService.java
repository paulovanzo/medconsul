package app.medconsul.services;

import java.util.List;

import app.medconsul.entities.Patient;
import app.medconsul.repositories.IPatientRepository;
import org.springframework.beans.factory.annotation.Autowired;

public class PatientService implements IPatientService {

    private final IPatientRepository patientRepository;
    
    @Autowired
    public PatientService(IPatientRepository patientRepository){
        this.patientRepository = patientRepository;
    }

    @Override
    public List<Patient> getAllPatient() {
        return patientRepository.findAll();
    }

    @Override
    public Patient save(Patient patient) {
        return patientRepository.save(patient);
    }

}
