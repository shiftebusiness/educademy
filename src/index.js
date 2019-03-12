import 'babel-polyfill';
import React from "react";
import { render } from 'react-dom';
import{ Router,browserHistory } from 'react-router';
import routes from './routes';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import {loadCourses} from './actions/courseActions';
import {loadSelectedCourse} from './actions/courseActions';
import App from './components/App'


const store = configureStore();
// store.dispatch(loadCourses());
// store.dispatch(loadSelectedCourse());

render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes}/>
    </Provider>,
    document.getElementById('root')
); 