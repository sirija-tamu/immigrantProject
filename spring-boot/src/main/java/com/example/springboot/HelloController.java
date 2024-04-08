package com.example.springboot;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.example.springboot.details.Details;
@RestController
public class HelloController {
    private JdbcTemplate jdbcTemplate;

    @Autowired
    public HelloController(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

	@GetMapping("/")
	public String index() {
		return "Greetings from Spring Boot!";
	}

    
    @PostMapping("/EnterDetails")
    String insert(@RequestBody Details ob)
    {

        int rows = jdbcTemplate.update(ob.generateInsertStatement());
        if (rows > 0) {
            System.out.println("A new row has been inserted.");
            return "Data Inserted";
        }
        return "Couldn't Insert Data";

        
    }

}