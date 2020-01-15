import { combineReducers } from 'redux';
import entities from "./entities_reducer";
import images from "./images_reducer";

const RootReducer = combineReducers({
    images,
    entities
})

export default RootReducer;