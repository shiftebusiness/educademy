import React from "react";
//import a-image from './a-image.jpg';
// import FontAwesomeIcon from '@fortawesome/react-fontawesome';
// import { fa-arrow-alt-circle-up, fa-star } from '@fortawesome/fontawesome-free-solid';
import { browserHistory } from 'react-router';
import {Link} from "react-router";

class CoursesList extends React.Component{
    constructor(props){
        super(props);

        // this.state={
        //     loaded: false
        // }

        // this.courseHandle=this.courseHandle.bind(this);
    }



    render(){
        const details=this.props.allCourses;
        return(
            <Link to={'/course/'+details.id}>
            <div className="col-md-4"> 
                <div className="mr-auto bg-info h-50 cards">
                {console.log("this.props arriveddddddd",details.id)} 
                    <img src={"http://shiftdev.net/workspace/plan3/sites/all/themes/shift2014/images//noimg_course_large.png"}></img>
                    <h1>{details.title}</h1>
                    <p className="likes">{details.likes} likes</p>
                    <p className="rate">{details.rating} rating</p>
                    <div className="to-clear"></div>
                </div>
            </div>
            </Link>
        );
    }
}

export default CoursesList;