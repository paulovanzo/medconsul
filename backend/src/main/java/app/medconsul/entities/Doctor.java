package app.medconsul.entities;

import java.util.List;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.JoinColumn;
import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.CascadeType;
import javax.persistence.FetchType;
import javax.persistence.OneToMany;

import app.medconsul.entities.Address;

@Entity
public class Doctor {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Long id;

    @Column (nullable = false)
    public String name;

    @Column(nullable = false)
    public String crm;

    @Column(nullable = false)
    public String phoneNumber;

    @Column(nullable = false)
    public String specialty;

    @OneToMany(fetch = FetchType.LAZY)
    @JoinColumn(name = "dc_id")
    public List<Address> addresses;

}
