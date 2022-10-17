package app.medconsul;

import org.springframework.boot.SpringApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = {"controllers","services","entities", "repositories"})
@EnableJpaRepositories(basePackages= "repositories")
public class MedconsulApplication {

	public static void main(String[] args) {
		SpringApplication.run(MedconsulApplication.class, args);
	}

}
