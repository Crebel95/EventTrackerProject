package com.skilldistillery.campsites.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.campsites.entities.Comment;
import com.skilldistillery.campsites.repositories.CommentRepository;

@Service
public class CommentServiceImpl implements CommentService {
	
	@Autowired
	private CommentRepository repo;

	@Override
	public Comment getComment(int id) {
		Comment com = repo.findById(id);
			return com;	
	}

	@Override
	public Comment create(Comment comment) {
		return repo.saveAndFlush(comment);
	}

	

}
