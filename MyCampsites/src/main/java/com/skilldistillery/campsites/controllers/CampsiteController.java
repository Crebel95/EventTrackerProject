package com.skilldistillery.campsites.controllers;

import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.campsites.entities.Campsite;
import com.skilldistillery.campsites.entities.Location;
import com.skilldistillery.campsites.services.CampsiteService;

@RestController
@RequestMapping("api")
public class CampsiteController {
	
	@Autowired
	private CampsiteService campService;
	
	@GetMapping("campsites")
	public List<Campsite> listAllCampsites(){
		return campService.listAllCampsites();
	}
	
	@GetMapping("campsites/{id}")
	public Campsite getCampsite(@PathVariable Integer id, HttpServletResponse res) {
		Campsite site = campService.getCampsite(id);
		if(site == null) {
			res.setStatus(404);
		}
		return site;
	}
	
	@PostMapping("campsites")
	public Campsite createCampsite(@RequestBody Campsite campsite, HttpServletResponse resp) {
		Campsite site = campService.create(campsite);
		if(site != null) {
			resp.setStatus(201);
		}
		return site;
	}
	
	@PutMapping("campsites/{id}")
	public Campsite updateCampsite(@RequestBody Campsite campsite,Location location, @PathVariable Integer id, HttpServletResponse resp) {
		Campsite updated = campService.update(id, campsite, location);
		return updated;
	}

}
