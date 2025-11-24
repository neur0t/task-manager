# System Architecture

This document provides a high-level overview of the Task Management System designed for the FullStack Engineer technical assignment.

---

## 1. High-Level Architecture

```mermaid
flowchart LR

    subgraph FE[Frontend - Angular / React]
        UI[Task UI<br/>Create / Update / View]
        AUTH[Login Page<br/>JWT Authentication]
    end

    subgraph BE[Backend - Spring Boot]
        API[REST API<br/>Tasks Controller]
        SERVICE[TaskService<br/>Validation + Business Logic]
        AUTHB[Auth Controller<br/>JWT Issuer]
        DB[(Database)]
    end

    UI -->|CRUD Tasks| API
    AUTH -->|Send Credentials| AUTHB
    AUTHB -->|Returns JWT| AUTH
    API --> SERVICE
    SERVICE --> DB

