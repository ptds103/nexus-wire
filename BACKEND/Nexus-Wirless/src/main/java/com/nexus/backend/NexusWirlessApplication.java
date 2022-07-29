package com.nexus.backend;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.jboss.logging.Logger;

@SpringBootApplication
public class NexusWirlessApplication implements CommandLineRunner {

	@Value("${app.message}")
	private static String message;

	private static final Logger logger = Logger.getLogger(NexusWirlessApplication.class);

	public static void main(String[] args) {
		SpringApplication.run(NexusWirlessApplication.class, args);

	}

	@Override
	public void run(String... args) throws Exception {
		logger.info(message);

	}

}
