import { combineReducers } from 'redux';
import HomeReducer from "./pages/home/HomeReducer";

export default combineReducers({
    home: HomeReducer
});