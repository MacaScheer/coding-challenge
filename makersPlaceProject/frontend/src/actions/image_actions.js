import { getImages }  from "../util/image_api_util"

export const RECEIVE_IMAGES = "RECEIVE_IMAGES";

export const receiveImages = images => ({
    type: RECEIVE_IMAGES,
    images
})

export const fetchImages = startIdx => dispatch => {
    getImages(startIdx).then(images => {
        console.log(images)
        debugger
    return dispatch(receiveImages(images))
    })
    .catch(err => console.log(err))
}