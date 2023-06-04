package com.skilldistillery.campsites.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.campsites.entities.Campsite;
import com.skilldistillery.campsites.entities.Location;
import com.skilldistillery.campsites.repositories.CampsiteRepository;

@Service
public class CampsiteServiceImpl implements CampsiteService {
	
	@Autowired
	private CampsiteRepository repo;

	@Override
	public List<Campsite> listAllCampsites() {
		return repo.findAll();
	}

	@Override
	public Campsite getCampsite(int id) {
		Campsite site = repo.findById(id);
		return site;
	}

	@Override
	public Campsite create(Campsite campsite) {
		campsite.getLocation().setId(1);
		return repo.saveAndFlush(campsite);
	}

	@Override
	public Campsite update(int id, Campsite campsite,Location location) {
		Campsite updateCampsite = repo.findById(id);
		
		if(updateCampsite != null) {			
		updateCampsite.setName(campsite.getName());
		updateCampsite.setDescription(campsite.getDescription());
		updateCampsite.setVisitDate(campsite.getVisitDate());
		updateCampsite.setPictureUrl(campsite.getPictureUrl());
		updateCampsite.getLocation().setId(1);
		updateCampsite.getLocation().setCity(location.getCity());
		updateCampsite.getLocation().setState(location.getState());
		updateCampsite.getLocation().setTerrain(location.getTerrain());
	    
		return repo.saveAndFlush(updateCampsite);
		}
		
		
		return null;
	}

	@Override
	public boolean delete(int id) {
		repo.deleteById(id);
		return !repo.existsById(id);
	}

}
