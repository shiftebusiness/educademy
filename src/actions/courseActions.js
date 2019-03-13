import * as types from './actionTypes';
import axios from 'axios';

export function loadCoursesSuccess(courses){
    return { type: types.LOAD_COURSES_SUCCESS, courses}
}

export function loadSelectedCourseSuccess(course){
    console.log('course in success', course);
    return { type: types.LOAD_SELECTED_COURSE_SUCCESS, course}
}

export function likeCourseChange(like){
    return { type: types.LIKE_SELECTED_COURSE_SUCCESS, like}
}

export function enrollCourseChange(enroll){
    return { type: types.ENROLL_SELECTED_COURSE_SUCCESS, enroll}
}

export function rateCourseChange(rate){
    return { type: types.RATE_SELECTED_COURSE_SUCCESS, rate}
}

// export function createCourseSuccess(course){
//     return { type: types.CREATE_COURSE_SUCCESS, course}
// }

// export function updateCourseSuccess(course){
//     return { type: types.UPDATE_COURSE_SUCCESS, course}
// }

export function loadCourses () {
    return function(dispatch) {
        return axios.get('http://localhost:3000/appapi/course/home?uid=3001201&page_top=1&page_bottom=1&ipp=10')
    };
}

export function loadSelectedCourse (selectedId) {
    return function(dispatch) {
        console.log('sel id', selectedId);
        return axios.get('http://localhost:3000/appapi/course/item?uid=3001201&cid='+selectedId);
        // .then(course =>{
        //     dispatch(loadSelectedCourseSuccess(course));
        // }).catch(error => {
        //     throw(error);
        // });
    };
}

export function likeCourse (selectedId,likeState) {
    return function(dispatch) {
        if (!likeState) {
            return axios.post('http://localhost:3000/appapi/course/like', {course_id:selectedId,uid:3001201})
        } else {
            return axios.post('http://localhost:3000/appapi/course/unlike', {course_id:selectedId,uid:3001201})
        }
        // .then(course =>{
        //     dispatch(loadSelectedCourseSuccess(course));
        // }).catch(error => {
        //     throw(error);
        // });
    };
}

export function enrollCourse (selectedId,enrollState) {
    return function(dispatch) {
        if (!enrollState) {
            return axios.post('http://localhost:3000/appapi/course/enrol', {course_id:selectedId,uid:3001201})
        } else {
            return axios.post('http://localhost:3000/appapi/course/unenrol', {course_id:selectedId,uid:3001201})
        }
        // .then(course =>{
        //     dispatch(loadSelectedCourseSuccess(course));
        // }).catch(error => {
        //     throw(error);
        // });
    };
}

export function rateCourse (selectedId,rateState) {
    return function(dispatch) {
            return axios.post('http://localhost:3000/appapi/course/rate', {course_id:selectedId ,uid:3001201,
            rateinput1:rateState,
            rateinput2:rateState,
            rateinput3:rateState,
            rateinput4:rateState,
            rateinput5:rateState,
            comment_rate:null})
        // .then(course =>{
        //     dispatch(loadSelectedCourseSuccess(course));
        // }).catch(error => {
        //     throw(error);
        // });
    };
}