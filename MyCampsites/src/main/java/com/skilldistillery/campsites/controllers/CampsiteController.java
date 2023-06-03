package com.skilldistillery.campsites.controllers;

import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.campsites.entities.Campsite;
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
	public Campsite getSite(@PathVariable Integer id, HttpServletResponse res) {
		Campsite site = campService.getCampsite(id);
		if(site == null) {
			res.setStatus(404);
		}
		return site;
	}

}
