```md

\# Sequence Diagrams



This document contains interaction diagrams describing key flows in the system.



---



\# 1. Login Flow



```mermaid

sequenceDiagram

&nbsp;   participant U as User

&nbsp;   participant FE as Frontend (Angular/React)

&nbsp;   participant BE as Backend (Spring Boot)



&nbsp;   U ->> FE: Enter credentials

&nbsp;   FE ->> BE: POST /auth/login

&nbsp;   BE -->> BE: Validate user

&nbsp;   BE ->> FE: Return JWT token

&nbsp;   FE ->> FE: Store token (localStorage/memory)



\# 2. Create Task Flow



sequenceDiagram

&nbsp;   participant U as User

&nbsp;   participant FE as Frontend

&nbsp;   participant BE as Backend

&nbsp;   participant DB as Database



&nbsp;   U ->> FE: Submit new task

&nbsp;   FE ->> BE: POST /tasks (Bearer token)

&nbsp;   BE ->> BE: Validate payload

&nbsp;   BE ->> DB: Insert task

&nbsp;   DB --> BE: OK

&nbsp;   BE ->> FE: 201 Created



\# 3. Retrieve All Tasks Flow

sequenceDiagram

&nbsp;   participant FE

&nbsp;   participant BE

&nbsp;   participant DB



&nbsp;   FE ->> BE: GET /tasks (JWT)

&nbsp;   BE ->> DB: Fetch tasks

&nbsp;   DB --> BE: Return rows

&nbsp;   BE ->> FE: JSON List of Tasks



\# 4. Update Task Flow



sequenceDiagram

&nbsp;   participant FE

&nbsp;   participant BE

&nbsp;   participant DB



&nbsp;   FE ->> BE: PUT /tasks/{id}

&nbsp;   BE ->> DB: Update task record

&nbsp;   DB --> BE: Success

&nbsp;   BE ->> FE: 200 OK





