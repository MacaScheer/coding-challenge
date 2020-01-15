import React from 'react';
import Masonry from 'react-masonry-component';

class Feed extends React.Component {
    constructor(props) {
        this.state = {
            images: [],
            startIdx: 0
        }
    }
    componentDidMount() {
        this.props.fetchImages(this.props.startIdx)
    }
    infiniteScroller() {
        window.onscroll = debounce(() => {
            if (
                window.innerHeight + document.documentElement.scrollTop ===
                document.documentElement.offsetHeight
            ) {
                this.setState = { startIdx: (this.state.startIdx += 9) }
                this.props.fetchImages(this.state.startIdx)
            }
        }, 100)
    }
    render() {
        let currentImages = this.props.images.map(function (image) {
            return (
                <li className="image-element">
                    <img src={image.src} />
                </li>
            )
        })
        return (
            <Masonry
                className={'feed-class'}
                elementType={'ul'}
                options={}
                disableImagesLoaded={false}
                updateOnEachImageLoad={false}
                imagesLoadedOptions={}
            >
                {currentImages}
                </Masonry>
            )
    }
}

export default withRouter(Feed)