import { combineReducers} from 'redux';
import courseRducer from './courseReducer';
// import authors from './authorReducer';

const rootReducer = combineReducers({
    courses: courseRducer
});

export default rootReducer;