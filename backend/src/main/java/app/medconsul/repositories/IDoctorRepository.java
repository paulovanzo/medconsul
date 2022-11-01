package app.medconsul.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import app.medconsul.entities.Doctor;
import org.springframework.stereotype.Repository;

@Repository
public interface IDoctorRepository extends JpaRepository<Doctor,Long>{
    Doctor findByName(String name);
}
