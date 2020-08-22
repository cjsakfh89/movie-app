import React from 'react';

function Potato(props) {
  console.log(props);
  return (    
    <h3>I like {props.favorate}</h3>
  );
}

function Food({favorate}) {
  return (    
    <h3>I like {favorate}.</h3>
  );
}

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <Potato favorate="potato" something={true} papapapapa={["hello", 1, 2, 3, 4, true]} />
      <Food favorate="kimchi" />
      <Food favorate="ramen" />
      <Food favorate="samgiopsal" />
      <Food favorate="chukumi" />
    </div>
  );
}

export default App;
