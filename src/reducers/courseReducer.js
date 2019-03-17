import * as types from '../actions/actionTypes';
import intialState from './intialState';

export default function courseRducer(state=intialState,action){
    switch (action.type) {
        case types.LOAD_COURSES_SUCCESS:
        return action.courses;

        case types.LIKE_SELECTED_COURSE_SUCCESS:
        return action.like;

        case types.ENROLL_SELECTED_COURSE_SUCCESS:
        return action.enroll;

        case types.RATE_SELECTED_COURSE_SUCCESS:
        return action.rate;

        case types.LOAD_COURSE_COMMENT_SUCCESS:
        return action.comment;

        case types.LOAD_MY_COURSES_SUCCESS:
        return action.myCourses;


        default:
        return state;
            
    }
} 
