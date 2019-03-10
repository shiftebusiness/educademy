import React from "react";
import CoursesList from '../course/CoursesList';
import { connect } from 'react-redux';
import * as courseActions from '../../actions/courseActions';
import {bindActionCreators} from 'redux';

class HomePage extends React.Component{
    constructor(props){
        super(props);

        this.state={
            items:{},
           loading: true
        }
    }

    componentDidMount(){
        this.props.actions.loadCourses().then(courses =>{
            console.log(courses)
            this.props.actions.loadCoursesSuccess(courses);
            this.setState({loading: false});
        }).catch(error => {
            console.log(error)
        });


    }

    render(){
 
        if (this.state.loading==true) {
            return(
                <div className="container-fluid">
                    <h1>PLEASE WAIT</h1>

                </div>
            );
    
        } else {
            const info=this.props.courses.courses.data.bottom.items;
            return(
                <div className="container-fluid">
                    {console.log("this.props info",info)}
                    {console.log("this.props toppppppppp",this.props.courses.courses.data.top)}
                    {info.map((item,key)=><CoursesList key={key} allCourses={item}/>)}
                </div>
            );
        }
    }
}

function mapStateToProps(state){
    // let courses={courses:{courses:{data:{bottom:{items:[]}}}}};
    return {
        courses : state
    };
}

function mapDispatchToProps(dispatch){
    return {
        actions :bindActionCreators(courseActions,dispatch)
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(HomePage);