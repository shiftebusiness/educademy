
import intialState from './intialState';
import * as types from '../actions/actionTypes';

export default function courseItemRducer(state=intialState.course,action){
    switch(action.type) {
        case types.LOAD_SELECTED_COURSE_SUCCESS:
            return action.course;
        default: 
        return state;
    }
};