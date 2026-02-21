# TaskFlow

TaskFlow is a **Kanban-style task management application built with
React**.\
It showcases structured component architecture and centralized state
management using `useReducer`.

This project represents the evolution from a basic CRUD To-Do app to a
scalable, column-based workflow system.

------------------------------------------------------------------------

## Overview

TaskFlow provides a simple Kanban board with three workflow stages:

-   To Do\
-   In Progress\
-   Done

Users can:

-   Create tasks\
-   Move tasks between columns\
-   Delete tasks\
-   Persist application state using LocalStorage

All state transitions are handled through a centralized reducer for
predictable and scalable updates.

------------------------------------------------------------------------

## Why This Project Matters

This project demonstrates practical frontend engineering concepts:

-   Scalable state management with `useReducer`\
-   Predictable state transitions\
-   Clear separation of concerns\
-   Modular component architecture\
-   Column-based workflow modeling\
-   Persistent client-side state

It is especially useful for:

-   Developers learning advanced React patterns\
-   Portfolio demonstration of structured state management\
-   Understanding reducer-driven UI architecture\
-   Transitioning from simple CRUD apps to scalable systems

------------------------------------------------------------------------

## Tech Stack

-   React\
-   Vite\
-   JavaScript (ES6+)\
-   LocalStorage API

------------------------------------------------------------------------

## Getting Started

### Prerequisites

-   Node.js \>= 18\
-   npm or yarn

### Installation

Clone the repository:

``` bash
git clone https://github.com/your-username/taskflow-kanban-react.git
cd taskflow-kanban-react
```

Install dependencies:

``` bash
npm install
```

Run development server:

``` bash
npm run dev
```

Open your browser at:

http://localhost:5173

------------------------------------------------------------------------

## Project Structure

    src/
    │
    ├── components/
    │   ├── Board.jsx
    │   ├── Column.jsx
    │   ├── TaskCard.jsx
    │   └── AddTaskForm.jsx
    │
    ├── context/
    │   └── taskReducer.js
    │
    ├── hooks/
    │   └── useLocalStorage.js
    │
    ├── App.jsx
    └── main.jsx

------------------------------------------------------------------------

## State Model

``` js
{
  todo: [],
  inProgress: [],
  done: []
}
```

### Reducer Actions

-   ADD_TASK\
-   MOVE_TASK\
-   DELETE_TASK

------------------------------------------------------------------------

## Usage Example

Adding a task:

``` js
dispatch({
  type: "ADD_TASK",
  payload: {
    id: Date.now(),
    title: "Build Kanban UI",
    column: "todo"
  }
});
```

Moving a task:

``` js
dispatch({
  type: "MOVE_TASK",
  payload: {
    taskId: 123,
    source: "todo",
    destination: "inProgress"
  }
});
```

------------------------------------------------------------------------

## Getting Help

If you encounter issues:

-   Open an issue in the repository\
-   Review existing issues before submitting a new one\
-   Provide steps to reproduce and environment details

------------------------------------------------------------------------

## Contributing

Contributions are welcome.

1.  Fork the repository\
2.  Create a feature branch\
3.  Commit your changes\
4.  Open a Pull Request

------------------------------------------------------------------------

## Maintainer

**Joseph Avila**

GitHub: https://github.com/AvilaJoseph\
Portfolio: https://avilajosephportofolio.netlify.app/
