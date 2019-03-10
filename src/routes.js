import React from "react";
import {Route,IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage'; 
import SeletedCourse from './components/course/SelectedCourse'; 
// import CoursesPage from './components/course/CoursesPage';
// import ManageCoursePage from './components/course/ManageCoursePage';



export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage}/>
        <Route path="about" component={AboutPage}/>
        {/* <Route path="course" component={SeletedCourse}/> */}
        <Route path="course/:id" component={SeletedCourse}/>
    </Route>
);