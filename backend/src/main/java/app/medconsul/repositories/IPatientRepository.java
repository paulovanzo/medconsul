package app.medconsul.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import app.medconsul.entities.Patient;
import org.springframework.stereotype.Repository;

@RepositoryRestResource(collectionResourceRel = "patients", path = "patients" )
public interface IPatientRepository extends JpaRepository<Patient,Long>{
}
