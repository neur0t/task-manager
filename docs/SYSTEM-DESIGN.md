```md

\# System Design \& Architecture Rationale



This document explains the design decisions behind the Task Management application.



---



\# 1. Architecture Pattern



The system follows a \*\*3-tier architecture\*\*:



\- \*\*Presentation Layer\*\* → Angular/React UI  

\- \*\*Backend Layer\*\* → Java + Spring Boot  

\- \*\*Persistence Layer\*\* → PostgreSQL  



```mermaid

flowchart TB

&nbsp;   UI\[Frontend] --> API\[REST API]

&nbsp;   API --> SRV\[Service Layer]

&nbsp;   SRV --> DB\[(Database)]

