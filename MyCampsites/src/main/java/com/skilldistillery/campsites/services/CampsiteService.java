package com.skilldistillery.campsites.services;

import java.util.List;

import com.skilldistillery.campsites.entities.Campsite;
import com.skilldistillery.campsites.entities.Location;

public interface CampsiteService {
	
	List<Campsite> listAllCampsites();
	Campsite getCampsite(int id);
	Campsite create(Campsite campsite);
	Campsite update(int id, Campsite campsite, Location location);
	boolean delete(int id);

}
