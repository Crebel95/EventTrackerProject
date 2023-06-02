package com.skilldistillery.campsites.entities;

import static org.junit.jupiter.api.Assertions.*;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class CampsiteTest {
	
	private static EntityManagerFactory emf;
	private EntityManager em;
	private Campsite camp;

	@BeforeAll
	static void setUpBeforeClass() throws Exception {
		emf = Persistence.createEntityManagerFactory("JPACampsites");
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
		emf.close();
	}

	@BeforeEach
	void setUp() throws Exception {
		em = emf.createEntityManager();
		camp =em.find(Campsite.class, 1);
	}

	@AfterEach
	void tearDown() throws Exception {
		em.close();
		camp = null;
	}

	@Test
	void test() {
		assertNotNull(camp);
		assertEquals("Flagstaff",camp.getName());
	}

}
