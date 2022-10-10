package app.medconsul.entities;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.JoinColumn;
import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class Address {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Long id;

    @Column
    public String name;

    @Column
    public String cep;

    @Column
    public String street;

    @Column
    public String number;

    @ManyToOne
    @JoinColumn(name = "dc_id")
    public Doctor dc_id;

}