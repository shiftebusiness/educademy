import React from "react";
import * as courseActions from '../../actions/courseActions';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';


class MyCourses extends React.Component{
    constructor(props){
        super(props);

        this.state={
           loading: true,
           completed:[],
           downloaded:[],
           progress:[]
        }
    }

    componentDidMount(){
        this.props.actions.loadMyCourses().then(myCourses =>{
            console.log("myCoursesmyCourses",myCourses.data)
            this.props.actions.loadMyCoursesSuccess(myCourses.data);
            this.setState({
                loading: false,
                completed:myCourses.data.completed.items,
                downloaded:myCourses.data.downloaded.items,
                progress:myCourses.data.progress.items
            });
        }).catch(error => {
            console.log(error)
        });
    }


    render(){
        return(
            <div>
                {console.log("this.state.downloaded",this.state.downloaded)}
                <h1>My courses</h1>

                {/* progress */}
                <h3>Progress courses:</h3>
                {this.state.progress.length !=0 && <div className="container-fluid">
                {this.state.progress.map((item,key)=>
                    (<div className="col-md-3 mr-auto bg-info h-50 cards" key={key}>
                     <h5>{item.title}</h5>
                     <p><img className="mycourse-image" src={item.image}/></p>
                     <p>No. of students: {item.students }</p>
                     <p>Rating: {item.rating }</p>
                     <p>Likes: {item.likes }</p>
                     <p>Progress: {item.progress_percentage }</p>

                     {/* <p>{item.enrolled }</p> */}
                     {/* <p>{item.downloaded }</p> */}
                    </div>)
                )}
                </div>}





                {/* Completed */}
                <h3>Completed courses:</h3>
                {this.state.completed.length !=0 && <div className="container-fluid">
                {this.state.completed.map((item,key)=>
                    (<div className="col-md-3 mr-auto bg-info h-50 cards" key={key}>
                     <h5>{item.title}</h5>
                     <p><img className="mycourse-image" src={item.image}/></p>
                     <p>No. of students: {item.students }</p>
                     <p>Rating: {item.rating }</p>
                     <p>Likes: {item.likes }</p>
                     <p>Progress: {item.progress_percentage }</p>

                     {/* <p>{item.enrolled }</p> */}
                     {/* <p>{item.downloaded }</p> */}
                    </div>)
                )}
                </div>}


                

                {/* DOWnLOADED */}
                <h3>Downloaded courses:</h3>
                {this.state.downloaded.length !=0 && <div className="container-fluid">
                {this.state.downloaded.map((item,key)=>
                    (<div className="col-md-3 mr-auto bg-info h-50 cards" key={key}>
                     <h5>{item.title}</h5>
                     <p><img className="mycourse-image" src={item.image}/></p>
                     <p>No. of students: {item.students }</p>
                     <p>Rating: {item.rating }</p>
                     <p>Likes: {item.likes }</p>
                     <p>Progress: {item.progress_percentage }</p>

                     {/* <p>{item.enrolled }</p> */}
                     {/* <p>{item.downloaded }</p> */}
                    </div>)
                )}
                </div>}

            </div>
        );
    }
}

// function mapStateToProps(state){
//     // let courses={courses:{courses:{data:{bottom:{items:[]}}}}};
//     return {
//         courses : state
//     };
// }

function mapDispatchToProps(dispatch){
    return {
        actions :bindActionCreators(courseActions,dispatch)
    };
}

export default connect(null,mapDispatchToProps)(MyCourses);