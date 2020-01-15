import { combineReducers } from "redux";
import images from "./images_reducer";

const EntitiesReducer = combineReducers({
    images
});

export default EntitiesReducer;