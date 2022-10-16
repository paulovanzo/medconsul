package app.medconsul.services;

import java.util.List;

import app.medconsul.entities.Patient;
import app.medconsul.services.IPatientService;
import app.medconsul.repositories.IPatientRepository;
import org.springframework.beans.factory.annotation.Autowired;

public class PatientService implements IPatientService {

    @Autowired
    private IPatientRepository PatientRepository;

    @Override
    public List<Patient> getAllPatient() {
        return PatientRepository.findAll();
    }

}
