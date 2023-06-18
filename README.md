# EventTrackerProject

### Week 12 Homework

## Overview

This is a full-stack Java Spring project based on a Mysql database and implements REST API.

This application allows a user to post their camping experiences to include information such as: 
The campsite's name, description, terrain, and pictures. The user also has the ability to edit their trips that are already in the database or completely delete a posting. 

## Database

* TODO: Screenshot of ER diagram, description of entities

## Rest API

| HTTP Verb | URI                  | Request Body | Response Body | Purpose |
|-----------|----------------------|--------------|---------------|---------|
| GET       | `/api/campsites`      |              | Collection of representations of all _campsite_ resources | **List** all campsites
| GET       | `/api/campsites/17`   |              | Representation of _Campsite_ `17` | **Retrieve** endpoint |
| POST      | `/api/campsites`      | Representation of a new _Campsite_ resource | Description of the result of the operation | **Create** endpoint |
| PUT       | `/api/campsites/17`   | Representation of a new version of _Campsite_ `17` | | **Replace** endpoint |
| DELETE    | `/api/campsites/17`   |              | | **Delete** route |

### Technologies Used
* Angular
* Java
* Sprint REST
* JPA with Hibernate
* JUnit
* Mysql Workspace
* PostMan
* Spring Tools Suite
* MAMP

### Lessons Learned

For this project, I learned how crucial it is to come up with a solid plan before beginning your work. There were a few times that I had to change things in my database because the original content didn't work. If I would have spent more time in the planning stage, I would have saved myself time and trouble later on.

I also learned a lot about using Javascript for setting up the front-end for projects. 
