package com.ccorder;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class })  //disable db config for now
public class CcorderApplication {

	public static void main(String[] args) {
		SpringApplication.run(CcorderApplication.class, args);
	}

}
