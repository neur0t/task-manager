# API Specification

This document describes the REST API exposed by the Task Management backend.

The API uses **Basic Authentication**.

Example header (Base for `admin:12345`):


---

# 1. Authentication

## 1.1 Basic Authentication

Clients must include this header on every request:

```
Authorization: Basic <base64(username:password)>
```

Invalid credentials return:

- **401 Unauthorized**

---

# 2. Task Endpoints

Base URL:

```
http://localhost:8080
```

All Task endpoints require Basic Auth.

---

## 2.1 GET `/tasks`

Retrieve all tasks.

### Response Example

```json
[
  {
    "id": 1,
    "title": "Buy groceries",
    "description": "Milk, Bread, Coffee",
    "completed": false
  }
]
```

---

## 2.2 GET `/tasks/{id}`

Retrieve a task by ID.

### Example Response

```json
{
  "id": 1,
  "title": "Buy groceries",
  "description": "Milk, Bread, Coffee",
  "completed": false
}
```

---

## 2.3 POST `/tasks`

Create a new task.

### Request Body

```json
{
  "title": "Study for exam",
  "description": "Operating systems",
  "completed": false
}
```

### Response

```
201 Created
```

### Example Response

```json
{
  "id": 5,
  "title": "Study for exam",
  "description": "Operating systems",
  "completed": false
}
```

---

## 2.4 PUT `/tasks/{id}`

Update an existing task.

### Example Request

```json
{
  "title": "Study for OS exam",
  "description": "Paging, Segmentation, Virtual Memory",
  "completed": true
}
```

### Example Response

```json
{
  "id": 5,
  "title": "Study for OS exam",
  "description": "Paging, Segmentation, Virtual Memory",
  "completed": true
}
```

---

## 2.5 DELETE `/tasks/{id}`

Delete a task.

### Response

```
204 No Content
```

---

# 3. Data Model

## Task Object

```json
{
  "id": 1,
  "title": "string",
  "description": "string",
  "completed": true
}
```

---

# 4. Error Handling Format

Every error returns a JSON object in this format:

```json
{
  "timestamp": "2025-01-01T12:00:00Z",
  "status": 404,
  "error": "Not Found",
  "path": "/tasks/999"
}
```

---

# 5. Authentication Summary

| Feature       | Value                     |
|---------------|---------------------------|
| Scheme        | Basic Authentication      |
| Username      | `admin`                   |
| Password      | `12345`                    |
| Required For  | All `/tasks/**` endpoints |

Clients must send credentials on every request. No JWT, no cookies.
