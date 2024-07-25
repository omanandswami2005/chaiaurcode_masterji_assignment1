# MasterJi (Assignment 1) React Project !

This project implements three tasks based on provided Figma designs using React. The tasks include an OTP form, a drag-and-drop course card list, and a data table.

## [Live Website is Here 📎](https://masterjiassignment1.onrender.com)

## Table of Contents

1. [Project Structure](#project-structure)
2. [Setup Instructions](#setup-instructions)
3. [Task Details](#task-details)
    - [OTP Form](#otp-form)
    - [Drag and Drop Course Cards](#drag-and-drop-course-cards)
    - [Data Table](#data-table)
4. [Routing](#routing)
5. [Branding Logo](#branding-logo)
6. [Screenshots](#screenshots)
7. [Technologies Used](#technologies-used)

## Project Structure

```
.
├── public
│   ├── index.html
│   └── ...
├── src
│   ├── components
│   │   ├── OTPForm.js
│   │   ├── CourseList.js
│   │   ├── DataTable.js
│   │   └── ...
│   ├── main.js
│   ├── index.html
│   └── ...
├── README.md
└── package.json
```

## Setup Instructions

1. Clone the repository:
    ```bash
    git clone https://github.com/omanandswami2005/chaiaurcode_masterji_assignment1.git
    cd chaiaurcode_masterji_assignment1
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the development server:
    ```bash
    npm start
    ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser to view the project.

## Task Details

### OTP Form

- **Empty Form State:** A form to input a 4-digit OTP.
- **Filling State:** The state during the input of the OTP.
- **Filled State (Success):** The state when the OTP is correctly filled (1234 is VALID OTP).
- **Filled State (Error):** The state when the OTP is incorrectly filled.

### Drag and Drop Course Cards

- Implement a list of vertical course cards using any drag-and-drop library of your choice.
- Each card should have actions for "Move to Top," "Move to Bottom," and "Remove."

### Data Table

- Create a paginated table listing batches of a course and their statuses.
- Include a search option to filter the batches.

## Routing

All three assignments are completed inside a single React project under different URL routes for the three tasks respectively:

- `/otp-form`: OTP Form
- `/course-list`: Drag and Drop Course Cards
- `/batches`: Data Table

The base URL `/` redirects to `/otp-form`.

## Branding Logo

The branding logo is positioned in the bottom right corner for all tasks. Clicking this logo opens the "chaicode.com" website.

## Screenshots

### OTP Form
![Screenshot 2024-07-26 001155](https://github.com/user-attachments/assets/f4c4becc-61e6-467d-b17f-2d5b7bd589a1)


### Drag and Drop Course Cards
![Screenshot 2024-07-26 001226](https://github.com/user-attachments/assets/4f37d54d-8d02-4949-8dfc-83af74c8748c)


### Data Table
![Screenshot 2024-07-26 001250](https://github.com/user-attachments/assets/ea9abc30-00cd-40d2-866b-2feb9b0023e9)

## Technologies Used

- React + vite
- React Router
- Drag-and-Drop Library (e.g., `react-dnd`)
- Tailwind CSS

# Thank You @hitesh Sir 😀 !
