package com.skilldistillery.campsites.controllers;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.campsites.entities.Comment;
import com.skilldistillery.campsites.services.CommentService;

@CrossOrigin({"*", "http://localhost/"})
@RestController
@RequestMapping("api")
public class CommentController {
	
	@Autowired
	private CommentService commentService;
	
	@GetMapping("comments/{id}")
	public Comment getComment(@PathVariable Integer id, HttpServletResponse res) {
		Comment com = commentService.getComment(id);
		if(com == null) {
			res.setStatus(404);
		}
		return com;
	}
	
	@PostMapping("comments")
	public Comment createComment(@RequestBody Comment comment) {
		Comment com = commentService.create(comment);
		return com;
	}

}
