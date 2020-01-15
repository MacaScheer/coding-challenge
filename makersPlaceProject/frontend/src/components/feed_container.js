import { connect } from "react-redux";

import { fetchImages } from "../actions/image_actions";

import Feed from "./feed"

const mapStateToProps = state => {
    return {
        images: state.images
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchImages: startIdx => dispatch(fetchImages(startIdx))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Feed);