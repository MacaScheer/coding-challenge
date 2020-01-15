import { connect } from "react-redux";

// import { withRouter } from "react-router";
import { fetchImages } from "../actions/image_actions";
import Feed from "./feed"

const mapStateToProps = state => {
    return {
        images: Object.values(state.entities.images)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchImages: startIdx => dispatch(fetchImages(startIdx))
    }
}

// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Feed));
export default connect(mapStateToProps, mapDispatchToProps)(Feed);
