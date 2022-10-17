package app.medconsul.entities;

import java.util.List;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.JoinColumn;
import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.FetchType;
import javax.persistence.OneToMany;

@Entity
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
    public String specialty;

    @OneToMany(fetch = FetchType.LAZY)
    @JoinColumn(name = "dc_id")
    public List<Address> addresses;

    public Doctor(){
        this.name = "";
        this.crm = "";
        this.phoneNumber = "";
        this.specialty = "";
    }

    public Doctor(String name, String crm, String phoneNumber, String specialty, List<Address> addresses) {
        this.name = name;
        this.crm = crm;
        this.phoneNumber = phoneNumber;
        this.specialty = specialty;
        this.addresses = addresses;
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

    public String getSpecialty() {
        return specialty;
    }

    public void setSpecialty(String specialty) {
        this.specialty = specialty;
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
    public String toString() {
        return "Doctor{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", crm='" + crm + '\'' +
                ", phoneNumber='" + phoneNumber + '\'' +
                ", specialty='" + specialty + '\'' +
                ", addresses=" + addresses +
                '}';
    }
}
