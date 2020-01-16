import React from 'react';
import Masonry from 'react-masonry-css';
import "./feed_style.css"
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
        this.setState = { startIdx: (this.state.startIdx += 9) }
    }
    componentDidMount() {
        this.fetchNextBatch()
        this.infiniteScroller()
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
            currentImages = this.props.images[0].map(image => {
                return (
                    <img className="feed-image" src={image} />
                )
            })
            
        } else {
            currentImages = <h1>"EMPTY PROPS"</h1>
        }
        return (
            <Masonry
                breakpointCols={{default: 3, 800: 2}}
                className="feed-masonry-grid"
                columnClassName="feed-masonry-grid_column"
            >
                {currentImages}
            </Masonry>
            )
    }
}

// export default withRouter(Feed)
export default Feed
