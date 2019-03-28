import { combineReducers } from 'redux';
import fabrics from './fabric';
import design from './design';
const appReducers = combineReducers({
    fabrics,
    design
});
export default appReducers;