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
    return { type: types.ENROLL_SELECTED_COURSE_SUCCESS, rate}
}

// export function createCourseSuccess(course){
//     return { type: types.CREATE_COURSE_SUCCESS, course}
// }

// export function updateCourseSuccess(course){
//     return { type: types.UPDATE_COURSE_SUCCESS, course}
// }

export function loadCourses () {
    return function(dispatch) {
        return axios.get('http://shiftdev.net/workspace/plan3/appapi/course/home?uid=3001201‏&page_top=1&page_bottom=1&ipp=10')
    };
}


export function loadSelectedCourse (selectedId) {
    return function(dispatch) {
        return axios.get('http://shiftdev.net/workspace/plan3/appapi/course/item?cid='+selectedId)
        // .then(course =>{
        //     dispatch(loadSelectedCourseSuccess(course));
        // }).catch(error => {
        //     throw(error);
        // });
    };
}

export function likeCourse (selectedId,likeState) {
    return function(dispatch) {
        if (likeState) {
            return axios.post('http://shiftdev.net/workspace/plan3/appapi/course/like', {is_liked:1,course_id:selectedId,uid:3001064})
        } else {
            return axios.post('http://shiftdev.net/workspace/plan3/appapi/course/unlike', {is_liked:0,course_id:selectedId,uid:3001064})
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
        if (enrollState) {
            return axios.post('http://shiftdev.net/workspace/plan3/appapi/course/enrol', {is_enrolled:1,course_id:selectedId,uid:3001064})
        } else {
            return axios.post('http://shiftdev.net/workspace/plan3/appapi/course/unenrol', {is_enrolled:0,course_id:selectedId,uid:3001064})
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
        if (enrollState) {
            return axios.post('http://shiftdev.net/workspace/plan3/appapi/course/enrol', {user_rate:rateState ,course_id:selectedId ,uid:3001064})
        } else {
            return axios.post('http://shiftdev.net/workspace/plan3/appapi/course/unenrol', {user_rate:rateState ,course_id:selectedId,uid:3001064})
        }
        // .then(course =>{
        //     dispatch(loadSelectedCourseSuccess(course));
        // }).catch(error => {
        //     throw(error);
        // });
    };
}


// export function saveCourse(course) {
//     return function(dispatch, getState) {
//         return CourseApi.saveCourse(course).then(savedCourse =>{
//            course.id ? dispatch(updateCourseSuccess(savedCourse)) :
//             dispatch(createCourseSuccess(savedCourse));
//         }).catch(error => {
//             throw(error);
//         });
//     };
// }

// axios.post('/user', {
//     firstName: 'Fred',
//     lastName: 'Flintstone'
// })
// .then(function (response) {
//     console.log(response);
// })
// .catch(function (error) {
//     console.log(error);
// });
