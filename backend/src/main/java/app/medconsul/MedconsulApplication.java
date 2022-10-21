package app.medconsul;

import org.springframework.boot.SpringApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = {"app.medconsul.controllers","app.medconsul.services","app.medconsul.entities", "app.medconsul.repositories"})
@EnableJpaRepositories
public class MedconsulApplication {

	public static void main(String[] args) {
		SpringApplication.run(MedconsulApplication.class, args);
	}

}
