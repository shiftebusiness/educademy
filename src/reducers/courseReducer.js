import * as types from '../actions/actionTypes';
import intialState from './intialState';

export default function courseRducer(state=intialState,action){
    switch (action.type) {
        case types.LOAD_COURSES_SUCCESS:
        return action.courses;

        case types.LOAD_SELECTED_COURSE_SUCCESS:
        return action.course;

        // case types.CREATE_COURSE_SUCCESS:
        // return [
        //     ...state,
        //     Object.assign({},action.course)
        // ];
        
        // case types.CREATE_COURSE_SUCCESS:
        // return [
        //     ...state.filter(course => course.id != action.course.id),
        //     Object.assign({},action.course)
        // ];
        
        default:
        return state;
            
    }
} 