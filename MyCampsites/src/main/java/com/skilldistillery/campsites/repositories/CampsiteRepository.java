package com.skilldistillery.campsites.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.campsites.entities.Campsite;

public interface CampsiteRepository extends JpaRepository<Campsite, Integer> {
	
	Campsite findById(int id);

}
