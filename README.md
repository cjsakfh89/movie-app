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

### 2.1 Reuseable Component with JSX + Props

Question: How do he rearrange indents for Food tag? (4:16)

Answer: https://www.youtube.com/watch?v=ya78lQi5vVI

Question: How do he select block vertically? (7:52)

Component has to have uppercase.

### 2.2 Dynamic Component Generation

### 2.3 map Recap

Every React component has to have unique key.

### 2.4 Protection with PropTypes

Tip: vscode Format Document shortcut: Shift+Alt+F

Install prop-types; npm i prop-types

See; https://ko.reactjs.org/docs/typechecking-with-proptypes.html

### 3.0 Class Component and State

Function이 아닌 Class로도 Application 구현이 가능하다.

Tip; javascript function add = () => {}

setState() 함수 재정의도 가능하다; current => ({ count: current.count + 1})