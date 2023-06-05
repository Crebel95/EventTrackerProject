package com.skilldistillery.campsites.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.campsites.entities.Comment;

public interface CommentRepository extends JpaRepository<Comment, Integer> {
	
	Comment findById(int id);

}
