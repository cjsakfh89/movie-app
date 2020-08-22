# Movie App 2019

React JS Fundamentals Course (2019 Update!)

## Lecture

### 0.1 Requirements

Install Node.js; https://nodejs.org

Install npm; Already installed by Node.js

Install npx; npm install npx -g

Install vscode; https://code.visualstudio.com

Install git; https://git-scm.com

### 0.2 Theory Requirements

HTML/CSS, Vanilla JS, Node.js

### 1.0 Creating your first React App

Run; npx create-react-app movie-app

Run vscode; File - Open Folder

Tip: vscode terminal; Ctrl+Shift+`

Run; npm start

Remove package-lock.json(Don't need)

### 1.1 Creating a Github Repository

Create github repository <movie-app> <React JS Fundamentals Course (2019 Update!)>

Run; git init

Run; git remote add origin https://github.com/cjsakfh89/movie-app.git

Run; git add .

Run; git commit -m "first commit"

Run; git push origin master

### 1.2 How does React work?

About directories; public: index.html; src: codes

Automatically updated in browser by saving files.

Substitute App.js through index.js between <div id="root"></div> of index.html file.

App content (between <div id="root"></div>) is not visible when trying to view the index.html source on the client side.

### 2.0 Creating your first React Component

Component: A function Returns HTML code.

jsx: Only works on React.

Every .js file using React should declare "import React from 'react';".

React application can render only one component.

React can have compononts in a hierarchical structure.