import React from 'react';
import PropTypes from 'prop-types';

function Potato(props) {
  console.log(props);
  return (
    <h3>I like {props.favorate}.</h3>
  );
}

function OldFood({ favorate }) {
  return (
    <h3>I like {favorate}.</h3>
  );
}

function Food(props) {
  return (
    <div>
      <h2>I like {props.name}.</h2>
      <h4>{props.rating}/5.0</h4>
      <img src={props.picture} alt={props.name} />
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number
};

const foodILike = [
  {
    id: 0,
    name: "Kimchi",
    image:
      "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg",
    rating: 5
  },
  {
    id: 1,
    name: "Samgyeopsal",
    image:
      "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg",
    rating: 4.9
  },
  {
    id: 2,
    name: "Bibimbap",
    image:
      "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb",
    rating: 5.5
  },
  {
    id: 3,
    name: "Doncasu",
    image:
      "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg",
    rating: 4.0
  },
  {
    id: 4,
    name: "Kimbap",
    image:
      "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg",
    rating: 3.0
  }
];

function renderFood(dish) {
  return <Food key={dish.id} name={dish.name} picture={dish.image} />
}

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <Potato favorate="potato" something={true} papapapapa={["hello", 1, 2, 3, 4, true]} />

      <OldFood favorate="kimchi" />
      <OldFood favorate="ramen" />
      <OldFood favorate="samgiopsal" />
      <OldFood favorate="chukumi" />

      {foodILike.map(renderFood)}

      {foodILike.map(dish => (
        <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
      ))}
    </div>
  );
}

export default App;
