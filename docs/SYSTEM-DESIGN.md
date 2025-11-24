# System Design & Architecture Rationale

This document explains the design decisions behind the Task Management application.

---

## 1. Architecture Pattern

The system follows a **3-tier architecture**:

- **Presentation Layer** → Angular/React UI  
- **Backend Layer** → Java + Spring Boot  
- **Persistence Layer** → PostgreSQL  

```mermaid
flowchart TB
    UI[Frontend] --> API[REST API]
    API --> SRV[Service Layer]
    SRV --> DB[(Database)]
