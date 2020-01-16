import { RECEIVE_IMAGES } from "../actions/image_actions";

const ImagesReducer = (
    state = { images: [] }, action
) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_IMAGES:
            newState.images.push(...action.images.data.nextUrls)
            return newState
        default:
            return state;
    }
};

export default ImagesReducer;