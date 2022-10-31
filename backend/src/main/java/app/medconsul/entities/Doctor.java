package app.medconsul.entities;

import java.util.List;
import java.util.Objects;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.JoinColumn;
import javax.persistence.Table;

@Entity
@Table(name = "doctor")
public class Doctor {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Long id;

    @Column
    public String name;

    @Column
    public String crm;

    @Column
    public String phoneNumber;

    @Column
    public String speciality;

    @OneToMany(targetEntity = Address.class, cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "doctor_fk", referencedColumnName = "id")
    public List<Address> addresses;

    public Doctor(){
        this.name = "";
        this.crm = "";
        this.phoneNumber = "";
        this.speciality = "";
    }

    public Doctor(String name, String crm, String phoneNumber, String speciality) {
        this.name = name;
        this.crm = crm;
        this.phoneNumber = phoneNumber;
        this.speciality = speciality;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Doctor(String crm) {
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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Doctor doctor)) return false;
        return id.equals(doctor.id) && Objects.equals(name, doctor.name) && Objects.equals(crm, doctor.crm) && Objects.equals(phoneNumber, doctor.phoneNumber) && Objects.equals(speciality, doctor.speciality) && Objects.equals(addresses, doctor.addresses);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, crm, phoneNumber, speciality, addresses);
    }

    @Override
    public String toString() {
        return "Doctor{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", crm='" + crm + '\'' +
                ", phoneNumber='" + phoneNumber + '\'' +
                ", speciality='" + speciality + '\'' +
                ", addresses=" + addresses +
                '}';
    }
}
