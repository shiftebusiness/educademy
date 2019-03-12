import { combineReducers} from 'redux';
import courseRducer from './courseReducer';
import courseItemReducer from './courseItemReducer';
// import authors from './authorReducer';

const rootReducer = combineReducers({
    courses: courseRducer,
    course_item: courseItemReducer
});

export default rootReducer;