package app.medconsul.entities.DTO;

import app.medconsul.entities.Patient;

import java.time.LocalDate;

public class PatientDTO {

    private Long id;

    public String name;

    public String cpf;

    public String email;

    public String phoneNumber;

    public LocalDate birthday;

    public enum Gender {
        Male,
        Female,
        Other
    }

    public Patient.Gender gender;

    public String urlImage;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getUrlImage() {
        return urlImage;
    }

    public void setUrlImage(String urlImage) {
        this.urlImage = urlImage;
    }
}
