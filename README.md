# EventTrackerProject

### Week 12 Homework

## Overview

This is a full-stack Java Spring project based on a Myswl database and implements REST API.

This application allows a user to post their camping experiences to include information such as: 
The campsite's name, location, description, terrain, and pictures.

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
* Java
* Sprint REST
* JPA with Hibernate
* JUnit
* Mysql Workspace

### Lessons Learned
