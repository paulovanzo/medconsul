package app.medconsul.entities.DTO;

import app.medconsul.entities.Address;
import java.util.List;

public class DoctorDTO {

    private Long id;

    public String name;

    public String crm;

    public String phoneNumber;

    public String speciality;

    public List<Address> addresses;

    public DoctorDTO(){
        this.name = "";
        this.crm = "";
        this.phoneNumber = "";
        this.speciality = "";
    }

    public DoctorDTO(String name, String crm, String phoneNumber, String speciality) {
        this.name = name;
        this.crm = crm;
        this.phoneNumber = phoneNumber;
        this.speciality = speciality;
    }


    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public DoctorDTO(String crm) {
        this.crm = crm;
    }

    public String getSpeciality() {
        return speciality;
    }

    public void setSpeciality(String speciality) {
        this.speciality = speciality;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public List<Address> getAddresses() {
        return addresses;
    }

    public void setAddresses(List<Address> addresses) {
        this.addresses = addresses;
    }

    public String getCrm() {
        return crm;
    }

    public void setCrm(String crm) {
        this.crm = crm;
    }
    
}
