package app.medconsul.services;

import java.util.List;

import app.medconsul.entities.DTO.PatientDTO;
import app.medconsul.entities.Patient;

public interface IPatientService {
    List<Patient> getAllPatient();
    Patient save(Patient pat);

    Patient edit(PatientDTO tmpPat);
}
