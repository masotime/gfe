import StarRating from './StarRating';
import './styles.css';
import * as React from 'react';

export default function App() {
  const [rating, setRating] = React.useState([2,1,0]);

  const handleChange = (index) => (value) => setRating(rating => {
    const newRating = [...rating];
    newRating[index] = value;
    return newRating;
  })
  
  return (
    <div>
      <StarRating maximum={5} onChange={handleChange(0)} filled={rating[0]} />
      <StarRating maximum={6} onChange={handleChange(1)} filled={rating[1]} />
      <StarRating maximum={4} onChange={handleChange(2)} filled={rating[2]} />
    </div>
  );
}

