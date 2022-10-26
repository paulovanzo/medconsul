package app.medconsul.services;

import java.util.List;
import app.medconsul.entities.Patient;

public interface IPatientService {
    List<Patient> getAllPatient();
    Patient save(Patient pat);
}
