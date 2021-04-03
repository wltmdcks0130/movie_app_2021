import React from "react";
import PropTypes from "prop-types";
//prop-types 설치함

function Food({name, picture, rating}){
  return <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name}/>
    </div>
}

Food.propTypes = {
  name:PropTypes.string.isRequired,
  picture:PropTypes.string.isRequired,
  rating:PropTypes.number.isRequired
};

const foodILike = [
                    {id:1, name: "Kimchi", image: "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg", rating:5},
                    {id:2, name: "Samgyeopsal", image: "https://img1.daumcdn.net/thumb/R720x0/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fliveboard%2Fdailylife%2F222d88e5c7dc496c8e8a8a56c3452e52.JPG", rating:4.9},
                    {id:3, name: "Bibimbap", image: "http://www.bibimbapfest.com/kr/images/A6000_01.jpg", rating:4.8},
                    {id:4, name: "Doncasu", image: "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg", rating:4.9}
                  ];

// function renderFood(dish){
//   return <Food name={dish.name} picture={dish.image} />
// }

// function App() {
//   return (
//     <div>
//       {foodILike.map(renderFood)}
//     </div>
//   );
// }

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
      ))}
    </div>
  );
}

export default App;
