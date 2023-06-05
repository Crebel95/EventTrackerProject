package com.skilldistillery.campsites.services;

import com.skilldistillery.campsites.entities.Comment;

public interface CommentService {
	
	Comment getComment(int id);
	Comment create(Comment comment);

}
