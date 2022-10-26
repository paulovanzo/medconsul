package app.medconsul.entities;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "roles")
public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long Id;
    private String name;

    public Role(String name) {
        this.name = name;
    }

    public Role() {
        this.name = "";
    }

    public Long getId() {
        return Id;
    }

    public void setId(Long id) {
        Id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Role role)) return false;
        return Id.equals(role.Id) && Objects.equals(name, role.name);
    }

    @Override
    public int hashCode() {
        return Objects.hash(Id, name);
    }

    @Override
    public String toString() {
        return "Role{" +
                "Id=" + Id +
                ", name='" + name + '\'' +
                '}';
    }
}
