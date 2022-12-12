package app.medconsul.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import app.medconsul.entities.Appointment;
import app.medconsul.repositories.IAppointmentRepository;

@Service
public class AppointmentService implements IAppointmentService {

    @Autowired
    private IAppointmentRepository appointmentRepository;

    @Override
    public List<Appointment> getAllAppointment() {
        return appointmentRepository.findAll();
    }

    @Override
    public Appointment save(Appointment appointment) {
        return appointmentRepository.save(appointment);
    }
    
    public void delete(long id){
        appointmentRepository.deleteById(id);
    }
}
