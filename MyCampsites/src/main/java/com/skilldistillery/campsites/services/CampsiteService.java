package com.skilldistillery.campsites.services;

import java.util.List;

import com.skilldistillery.campsites.entities.Campsite;

public interface CampsiteService {
	
	List<Campsite> listAllCampsites();
	Campsite getCampsite(int id);
	Campsite create(Campsite campsite);
	Campsite update(int id, Campsite campsite);
	boolean delete(int id);

}
