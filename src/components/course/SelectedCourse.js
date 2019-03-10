import React from "react";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';


class SeletedCourse extends React.Component{
    constructor(props){
        super(props);

        this.state={
           loading: true
        }
    }

    componentDidMount(){
        this.props.actions.loadSelectedCourse(this.props.params.id).then(course =>{
            this.props.actions.loadSelectedCourseSuccess(course);
            this.setState({loading: false});

        }).catch(error => {
            throw(error);
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
            const courseDetail = this.props.course.courses.data;
            return(
                <div>
                    <div className="course-content">
                    {console.log("tttttttthis.propsEEEEEEE",courseDetail.title)}
                    {console.log("this.props----",this.props.course.courses.data)}
                    {console.log("courseDetail.likes",courseDetail.likes)}
                        <h1 className="text-primary course-content">{courseDetail.title}</h1>
                        <button className="btn btn-warning" id="content-enroll">ENROLL</button>
                        <p className="text-info detail" id="content-rate">{courseDetail.rate} rate</p>
                        <p className="text-info detail" id="content-likes">{courseDetail.likes.count} likes</p>
                        <div className="to-clear"></div>
                        <p><img id="courseImage" src={'http://shiftdev.net/workspace/plan3/sites/all/themes/shift2014/images//noimg_course_large.png'}/></p>
    
                    </div>
                    <div className="aa">
                        <p className="text-info detail students">No of students:   <span>{courseDetail.learners.count}</span> </p>
                        <p className="text-info detail">What i will learn:   <span>{courseDetail.learn}</span></p>
                    </div>
                </div>
    
                
            );
        }

    }
}


//---------------------------------
function mapStateToProps(state, ownProps) {
    // const courseId = ownProps.params.id;

    // let course = {id:'', title:'', watchHref:'', authoirId: '', length:'', category:''};
    
    // if(courseId && state.courses.length > 0){
    //     course= getCourseById(state.courses,courseId)
    // }

    // const authorsFormattedForDropdown = state.authors.map(author => {
    //     return {
    //         value: author.id,
    //         text: author.firstName + ' ' + author.lastName
    //     };
    // });

    return{
        course:  state,
        // authors: authorsFormattedForDropdown
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)    // All courseActions will bw available under this.props.acti ons
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SeletedCourse);