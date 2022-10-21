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
    
}