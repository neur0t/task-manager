\# API Specification



This document describes the REST API exposed by the Task Management backend.



---



\## Base URL



\# 1. Authentication Endpoints



\## POST `/auth/login`



Authenticate a user with credentials and receive a JWT token.



\### Request Body

```json

{

	"username": "john.doe",

	"password": "secret123"

}

Responses

Status	Description

200	Authentication successful

401	Invalid credentials



Success Response Example


{

	"token": "<jwt-token>",

	"expiresIn": 3600

}

2. Task Endpoints

GET /tasks

Retrieve all tasks for the authenticated user.





Authorization: Bearer <jwt>

Response

json


[

	{

		"id": 1,

	 	"title": "Buy groceries",

	 	"description": "Milk, Bread, Coffee",

		"status": "PENDING",

  		"createdAt": "2025-01-01T12:30:00Z"

	}

]

GET /tasks/{id}

Retrieve a task by its ID.



Example Response



{

	"id": 1,

	"title": "Buy groceries",

	"description": "Milk, Bread, Coffee",

	"status": "PENDING"

}

POST /tasks

Create a new task.



Request Body


{

	"title": "Study for exam",

	"description": "Operating Systems chapter",

	"status": "PENDING"

}

Response


201 Created

PUT /tasks/{id}

Update an existing task.



Example Request

{

&nbsp; "title": "Study for OS exam",

&nbsp; "description": "Paging, Segmentation, Virtual Memory",

&nbsp; "status": "IN\_PROGRESS"

}

3. Data Model

Task Object


{

	"id": 1,

	"title": "string",

	"description": "string",

	"status": "PENDING | IN_PROGRESS | DONE",

	"createdAt": "ISO date"

}

User Object


{

	"id": 10,

	"username": "string",

	"passwordHash": "string"

}



4. Error Handling Format

All API errors follow a consistent structure.


Example:

{

&nbsp; "timestamp": "2025-01-01T12:00:00Z",

&nbsp; "message": "Task not found",

&nbsp; "status": 404

}

