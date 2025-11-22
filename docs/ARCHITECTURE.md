```md

\# System Architecture



This document provides a high-level overview of the Task Management System designed for the FullStack Engineer technical assignment.



---



\## 1. High-Level Architecture



```mermaid

flowchart LR

&nbsp;   subgraph FE\[Frontend - Angular/React]

&nbsp;       UI\[Task UI\\n(Create/Update/View)]

&nbsp;       AUTH\[Login Page\\n(JWT)]

&nbsp;   end

&nbsp;   

&nbsp;   subgraph BE\[Backend - Java Spring Boot]

&nbsp;       API\[REST API\\nTasks Controller]

&nbsp;       SERVICE\[TaskService\\nValidation+Logic]

&nbsp;       AUTHB\[Auth Controller\\nJWT Issuer]

&nbsp;       DB\[(Database)]

&nbsp;   end



&nbsp;   UI -->|CRUD Tasks| API

&nbsp;   AUTH -->|Send Credentials| AUTHB

&nbsp;   AUTHB -->|Returns JWT| AUTH

&nbsp;   API --> SERVICE

&nbsp;   SERVICE --> DB

