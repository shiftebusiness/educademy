import React from "react";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import Like from './Like';
import Rate from './Rate';
import Enroll from './Enroll';

class SeletedCourse extends React.Component{
    constructor(props){
        super(props);

        this.state={
           loading: true,
           hasLiked:0,
           enrolled:0,
           rating:0,
           comments:[],
           showHideCommentsButtonText:"SHOW"
        }

        this.handleClick=this.handleClick.bind(this);
        this.handleEnroll=this.handleEnroll.bind(this);
        this.handleRate=this.handleRate.bind(this);
        this.handleComment=this.handleComment.bind(this);
    }


    handleComment(nidSelected){

        if(this.state.showHideCommentsButtonText == "SHOW"){
            this.props.actions.loadCourseComments(nidSelected).then(res =>{
                this.props.actions.loadCourseCommentsChange(res.data.list);
                this.setState({comments:res.data.list,showHideCommentsButtonText:"HIDE"});
                }).catch(error => {
                throw(error);
            });
        }else{
            this.setState({comments:[],showHideCommentsButtonText:"SHOW"});
        }
    }

    handleClick(){
        this.props.actions.likeCourse(this.props.params.id,this.state.hasLiked).then(res =>{
            console.log("ressssssss",res);
            this.props.actions.likeCourseChange(!this.state.hasLiked);
            this.setState({hasLiked:!this.state.hasLiked});
            }).catch(error => {
            throw(error);
        });
    }

    handleEnroll(){
        this.props.actions.enrollCourse(this.props.params.id,this.state.enrolled).then(res =>{
            this.props.actions.enrollCourseChange(!this.state.enrolled);
            this.setState({enrolled:!this.state.enrolled});
            }).catch(error => {
            throw(error);
        });
    }

    handleRate(nextValue, prevValue, name){
        console.log("this.props--",this.props.course_item.rate);
        console.log("nextValue--",nextValue);
        this.setState({rating:nextValue});
        console.log("this.state.rating--",this.state.rating);
        this.props.actions.rateCourse(this.props.params.id,nextValue).then(res =>{
            this.props.actions.rateCourseChange(nextValue);
            this.setState({rating:nextValue});
            // console.log("this.state.rating--",this.state.rating);
            }).catch(error => {
            throw(error);
        });
    }

    componentDidMount(){
        this.props.actions.loadSelectedCourse(this.props.params.id).then(res =>{
            console.log('this.props.course_item.rate*******', this.props.course_item.rate);
            this.props.actions.loadSelectedCourseSuccess(res.data);
            this.setState({ loading: false,
                            hasLiked: this.props.course_item.is_liked,
                            enrolled:this.props.course_item.is_enrolled,
                            rating:this.props.course_item.rate});
            console.log("this.props.course.courses.data.is_liked", this.props.course_item.is_liked);
            console.log("enrolled in cdm", this.props.course_item.is_enrolled);
            console.log("this.props.course_item.is_rated", this.props.course_item.is_enrolled);
    

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
            const courseDetail = this.props.course_item;
            return(
                <div>
                    <div className="course-content">
                    {console.log("courseDetailllllllllllllllllllll",courseDetail)}
                        <h1 className="text-primary course-content">{courseDetail.title}</h1>
                        {/* <p className="text-info detail" id="content-rate">{courseDetail.rate} rate</p> */}
                        <Enroll isEnrolled={this.state.enrolled} toEnroll={this.handleEnroll} />
                        {/* <p className="text-info detail" id="content-likes">{courseDetail.likes.count} likes</p> */}
                        <Like isLiked={this.state.hasLiked} clicked={this.handleClick}/>
                        <Rate rates={this.state.rating} toRate={this.handleRate}/>
                        <div className="to-clear"></div>
                        <p><img id="courseImage" src={'http://shiftdev.net/workspace/plan3/sites/all/themes/shift2014/images//noimg_course_large.png'}/></p>
    
                    </div>
                    <div className="aa">
                    {/* {console.log("topicstopicstopics",courseDetail.topics[0])} */}
                    {/* {console.log("topicstopicstopics.comments_count",courseDetail.topics[0].comments_count)} */}
                    {/* {console.log("topicstopicstopics.nid",courseDetail.topics[0].nid)} */}
                    {/* {console.log("alllllllll.nid",this.props.all)} */}
                        {/* <p className="text-info detail students">No of students:   <span>{courseDetail.learners.count}</span> </p> */}
                        <p className="text-info detail">What i will learn:   <span>{courseDetail.learn}</span></p>
                        <p className="text-info detail">Course completion: <span>{ courseDetail.is_completed ? "completed!" : "not yet"}</span></p>
                        <p className="text-info detail">Course completion: <span>{ courseDetail.desc }</span></p>
                        <p className="text-info detail">Course preparation: <span>{ courseDetail.prepare }</span></p>
                        <p className="text-info detail">Course progress: <span>{ courseDetail.progress_percentage }</span></p>
                        <p className="text-info detail"> Topics:</p>


                        {console.log("courseDetail.topicsssssss",courseDetail.topics)}
                        {(courseDetail.topics.length !=0) && courseDetail.topics.map((topic,key)=>
                         <div key={key}>
                        {console.log("topic",topic,"topic.length",topic.length!=0,"topic.title",topic.title)}
                        <p className="text-info detail">Title: <span>{topic.title}</span></p>
                        <p className="text-info detail">comments: {topic.comments_count} <span><button onClick={() => this.handleComment(topic.nid)}>{this.state.showHideCommentsButtonText}</button></span></p>
                        {this.state.comments.map((item,key)=>item?<p key={key}>{item.comment_body}</p>:null)}

                        {/* {this.state.comments[0] && <p>{this.state.comments[0].comment_body}</p>} */}
                        
                        <p className="text-info detail">creator: <span>{topic.creator_name}</span></p>
                        </div>)}
                        


                        <p className="text-info detail">Image: <span><img className="topic-image" src={'http://shiftdev.net/workspace/plan3/sites/all/themes/shift2014/images//noimg_course_large.png'}/></span></p>
                        <div className="to-clear"></div>
                        <p>Learners:</p>
                        <p>{courseDetail.learners.images.map((item,key)=><img className="images-like" key={key} src={'http://shiftdev.net/workspace/plan3/sites/all/themes/shift2014/images//noimg_course_large.png'}/>)}</p>
                        <p>likes:</p>
                        <p>{courseDetail.likes.images.map((item,key)=><img className="images-like" key={key} src={'http://shiftdev.net/workspace/plan3/sites/all/themes/shift2014/images//noimg_course_large.png'}/>)}</p>
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
        course_item:  state.course_item,
        // all: state.courses
        // authors: authorsFormattedForDropdown
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)    // All courseActions will bw available under this.props.acti ons
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SeletedCourse);