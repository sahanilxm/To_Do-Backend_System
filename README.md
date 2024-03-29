# ToDo Backend System
Welcome to the ToDo Backend System! This project provides a robust backend infrastructure for a to-do application, featuring user registration, login, task and subtask management, automatic task priority updates based on due dates, and overdue task notifications via calls.

### Technologies Used
    1. Node.js: JavaScript runtime for server-side development.
    2. Express.js: Web application framework for Node.js.
    3. MongoDB: NoSQL database for storing user data, tasks, and subtasks.
    4. Twilio API: Used for sending notifications via calls.
### Key Features
    1. User Registration and Login:
        - Register a new user account.
        - Authenticate and receive a JWT token for access.
    2. Task and Subtask Management:
        - Create, read, update, and delete tasks.
        - Manage subtasks associated with tasks.
    3. Automatic Priority Updates: 
        - Prioritize tasks automatically based on due dates using cron jobs.
    4. Overdue Task Notifications via Calls: 
        - Notify users of overdue tasks through phone calls using cron-jobs.