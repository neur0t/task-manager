# Task Manager - Full Stack Application

## Overview

This project is a full-stack Task Manager application built with: -
**Spring Boot (Java 21)** for the backend - **Angular** (with SSR
disabled for production builds) - **Nginx** serving the frontend -
**Docker & Docker Compose** for containerization

## Features

-   Create, read, update, delete tasks
-   Basic Authentication (admin / 1234)
-   H2 embedded database
-   Frontend served via Nginx
-   Full Dockerized setup

## Technologies

-   Java 21, Spring Boot, Maven
-   Angular, TypeScript
-   Docker, Docker Compose
-   H2 database
-   Nginx

## Running with Docker

Make sure Docker is installed, then run:

    docker compose up --build

### Frontend:

http://localhost:4200

### Backend:

http://localhost:8080/tasks

Basic Auth: - **username**: admin\
- **password**: 1234

## Stopping the application

    docker compose down

## Project Structure

(task-manager/) - backend/ - Dockerfile - src/... - frontend/ -
taskmanager-ui/ - Dockerfile - nginx.conf - src/... - docker-compose.yml

## API Specification

### GET /tasks

Returns all tasks.

### POST /tasks

Creates a task.

### PUT /tasks/{id}

Updates a task.

### DELETE /tasks/{id}

Deletes a task.

## Docker Architecture

-   Angular builds static files → served by Nginx
-   Spring Boot runs on port 8080
-   docker-compose links both on a shared network
