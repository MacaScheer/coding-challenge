import { RECEIVE_IMAGES } from "../actions/image_actions";

const ImagesReducer = (
    state = { images: [] }, action
) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_IMAGES:
            debugger
            newState.images.push(...action.images)
            debugger
            break;
        default:
            return state;
    }
};

export default ImagesReducer;