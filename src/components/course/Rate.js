import React from "react";
import StarRatingComponent from 'react-star-rating-component';

const Rate = ({rates, toRate})=>{
    return(
        <div>
        <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={rates}
          onStarClick={toRate}
        />
    </div>    );
};

export default Rate;
