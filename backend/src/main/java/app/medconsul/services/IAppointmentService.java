package app.medconsul.services;

import java.util.List;
import app.medconsul.entities.Appointment;

public interface IAppointmentService {
    List<Appointment> getAllAppointment();
    Appointment save(Appointment appointment);
}
