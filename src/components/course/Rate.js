import React from "react";
import StarRatingComponent from 'react-star-rating-component';

const Rate = ({starsNumber})=>{

    return(
        <div>
            <StarRatingComponent 
                name="rate2" 
                editing={false}
                renderStarIcon={() => <span></span>}
                starCount={5}
                value={starsNumber}
            />
        </div>        
    );
};

export default Rate;
