# The Universe of All
A web application written with React for a fantasy Dungeons and Dragons universe I created, to be used in my home games. 
<br>For SoftUni React Exam - April 2021.

## Overview
The application includes 15 components (4 Class 11 Functional). CSS is handled within modules. 
- Firebase Auth handles authentication, including error handling
- Firestore is used as a database for the project
- Routing is handled by React-Router-Dom
- Printing functionality is done by [React-to-Print](https://github.com/gregnb/react-to-print#readme)
- Connects to [D&D 5e API](http://www.dnd5eapi.co/) to get dnd classes
- Images are stored in [imgur](https://imgur.com/)
- Hooks - useState, useEffect, useRef, useHistory
- Usage of this.setState

## Availability
### Public Area
Unauthenticated users can access Home, Adventures, Register, Login pages.

### Private Area
Authenticated users can access Character Creator, My Characters Page.

## Project Component Tree
Components marked with * are class components.
- Header
- Main 
  - Home
    - Create Character Button  
  - Character Creator*
    - Realm Select*
    - Race Select*
  - Character Details
  - Adventures*
  - My Characters
    - User Character Render
  - Register
  - Login
- Aside
- Footer
