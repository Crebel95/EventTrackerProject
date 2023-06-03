package com.skilldistillery.campsites.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.campsites.entities.Campsite;
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
		Campsite site = null;
		Optional<Campsite> siteOpt = repo.findById(id);
		if(siteOpt.isPresent()) {
			site = siteOpt.get();
		}
		return site;
	}

	@Override
	public Campsite create(Campsite campsite) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Campsite update(int id, Campsite campsite) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public boolean delete(int id) {
		// TODO Auto-generated method stub
		return false;
	}

}
