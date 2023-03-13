```mermaid
sequenceDiagram
    participant browser
    participant server

    Note right of browser: Add the new note to form

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/spa
    activate server
    server-->>browser: 201 success
    deactivate server
    
    
```
