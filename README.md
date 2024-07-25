Sure, I can help you create a README file for your project. Please provide me with the necessary screenshots and any additional details you'd like to include. Meanwhile, here's a draft of the README file:

---

# MasterJi React Project

This project implements three tasks based on provided Figma designs using React. The tasks include an OTP form, a drag-and-drop course card list, and a data table.

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
│   ├── App.js
│   ├── index.js
│   └── ...
├── README.md
└── package.json
```

## Setup Instructions

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/masterji-react-project.git
   cd masterji-react-project
   ```
2. Install dependencies:

   ```bash
   npm install
   ```
3. Start the development server:

   ```bash
   npm start
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

## Task Details

### OTP Form

- **Empty Form State:** A form to input a 4-digit OTP.
- **Filling State:** The state during the input of the OTP.
- **Filled State (Success):** The state when the OTP is correctly filled.
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

![OTP Form](path/to/screenshot-otp-form.png)

### Drag and Drop Course Cards

![Course List](path/to/screenshot-course-list.png)

### Data Table

![Data Table](path/to/screenshot-data-table.png)

## Technologies Used

- React
- React Router
- Drag-and-Drop Library (e.g., `react-beautiful-dnd`)
- Axios (for any API calls)
- CSS Modules / Styled Components

---

Feel free to customize this README further based on your specific project details and the screenshots you provide.
