import React from "react";

const Enroll = ({toEnroll,isEnrolled})=>{

    if (isEnrolled) {
        return(
            <div>
                <button className="btn btn-warning" id="content-enroll" onClick={toEnroll}>UNENROLLED</button>
            </div>
        );
    } else {
        return(
            <div>
                <button className="btn btn-warning" id="content-enroll" onClick={toEnroll}>ENROLLED</button>
            </div>
        );
    }
};

export default Enroll;

