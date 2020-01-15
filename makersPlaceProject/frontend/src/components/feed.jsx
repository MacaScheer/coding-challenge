import React from 'react';
import Masonry from 'react-masonry-component';
import { withRouter } from "react-router-dom";
var debounce = require('debounce');


class Feed extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            images: [],
            startIdx: 0
        }
        this.fetchNextBatch = this.fetchNextBatch.bind(this)
    }

    fetchNextBatch() {
        this.props.fetchImages(this.state.startIdx)
        debugger
        this.setState = { startIdx: (this.state.startIdx += 9) }
    }
    componentDidMount() {
        this.fetchNextBatch()
    }
    infiniteScroller() {
        window.onscroll = debounce(() => {
            if (
                window.innerHeight + document.documentElement.scrollTop ===
                document.documentElement.offsetHeight
            ) {
               this.fetchNextBatch()
            }
        }, 100)
    }
    render() {
        let currentImages
        if (this.props.images) {
            currentImages = this.props.images.map(function (image) {
                return (
                    <li className="image-element">
                        <img src={image.src} />
                    </li>
                )
            })
            
        } else {
            currentImages = <h1>"EMPTY PROPS"</h1>
        }
        return (
            <Masonry
                className={'feed-class'}
                elementType={'ul'}
                disableImagesLoaded={false}
                updateOnEachImageLoad={false}
            >
                {currentImages}
            </Masonry>
            )
    }
}

// export default withRouter(Feed)
export default Feed
