import React from "react";

const Like = ({isLiked,clicked})=>{
    console.log("isLiked",isLiked);

    if (isLiked) {
        return(
            <div>
                <button onClick={clicked}>UNLIKE</button>
            </div>
        );
    } else {
        return(
            <div>
                <button onClick={clicked}>LIKE</button>
            </div>
        );
    }

};

export default Like;
