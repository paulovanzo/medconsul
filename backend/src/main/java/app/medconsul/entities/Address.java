package app.medconsul.entities;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.JoinColumn;
import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import java.util.Objects;

@Entity
@Table(name = "address")
public class Address {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Long id;

    @ManyToOne(targetEntity = Doctor.class, fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "addresses", nullable = false)
    private Doctor doctor;

    @Column
    public String name;

    @Column
    public String cep;

    @Column
    public String street;

    @Column
    public String number;

    public Address(){
        this.name = "";
        this.cep = "";
        this.street = "";
        this.number = "";
    }

    public Address(String name, Doctor doc){
        this.doctor = doc;
        this.name = name;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Doctor getDoctor() {
        return doctor;
    }

    public void setDoctor(Doctor doctor) {
        this.doctor = doctor;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCep() {
        return cep;
    }

    public void setCep(String cep) {
        this.cep = cep;
    }

    public String getStreet() {
        return street;
    }

    public void setStreet(String street) {
        this.street = street;
    }

    public String getNumber() {
        return number;
    }

    public void setNumber(String number) {
        this.number = number;
    }

    public Address(Long id, Doctor doctor, String name, String cep, String street, String number) {
        this.id = id;
        this.doctor = doctor;
        this.name = name;
        this.cep = cep;
        this.street = street;
        this.number = number;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Address address)) return false;
        return id.equals(address.id) && Objects.equals(doctor, address.doctor) && Objects.equals(name, address.name) && Objects.equals(cep, address.cep) && Objects.equals(street, address.street) && Objects.equals(number, address.number);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, doctor, name, cep, street, number);
    }
    @Override
    public String toString() {
        return "Address{" +
                "id=" + id +
                ", doctor=" + doctor +
                ", name='" + name + '\'' +
                ", cep='" + cep + '\'' +
                ", street='" + street + '\'' +
                ", number='" + number + '\'' +
                '}';
    }

}