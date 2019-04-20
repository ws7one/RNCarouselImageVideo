/* eslint-disable no-nested-ternary */
import React, { Component } from 'react';
import { 
    View,
    Text,
    Image
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Video from 'react-native-video';

class CarouselComponent extends Component {
    constructor(props) {
        super(props);        
        this.onSnapToItem = this.onSnapToItem.bind(this);
    }

    componentDidMount() {
        this.props.getTabsForCarouselAsync();
    }
    
    onSnapToItem(index) {
        // console.log('[App]OnSnapToItem', index);
        this.props.setActiveTab(index);
    }

    renderItem({ item }) {
        // console.log('[CarouselComponent](renderItem):', item);
        return (
            <View
                style={{
                    height: 250,
                    width: 250,
                    borderWidth: 1,
                    borderColor: 'black',
                    // elevation: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                {
                    item.type === 'image'
                        ? <Image
                            source={{ uri: item.url }}
                            style={{ height: 250, width: 250 }}
                            resizeMode="cover"
                        />
                        : item.type === 'video'
                            ? <VideoComponent
                                url={item.url}
                                paused={item.paused}
                            />
                            : <Text style={{ color: 'red', fontSize: 16 }}>{item.url}</Text>
                }
            </View>
        );
    }
    render() {
        // console.log('[CarouselComponent]this.props:', this.props);
        return (
            <View style={styles.container}>
            {
                this.props.carousel.tabsForCarousel.length > 0
                ? <Carousel
                    ref={(c) => { this.carousel = c; }}
                    data={this.props.carousel.tabsForCarousel}
                    renderItem={this.renderItem}
                    sliderWidth={1000}
                    sliderHeight={250}
                    itemWidth={250}
                    itemHeight={250}
                    onSnapToItem={this.onSnapToItem}
                />
                : null
            }
                {/* <Video
                    source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
                    style={{ width: 250, height: 150 }}
                    paused={this.state.paused}
                    // resizeMode="contain"
                    // volume={1.0}
                    // rate={1.0}
                    // ignoreSilentSwitch="obey"
                /> */}
            </View>
        );
    }
}
export default CarouselComponent;

const styles = {
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
};

const VideoComponent = (props) => {
    return (
        <Video
            source={{ uri: props.url }}
            style={{ width: 250, height: 150 }}
            resizeMode="contain"
            volume={1.0}
            rate={1.0}
            ignoreSilentSwitch="obey"
            paused={props.paused}
        />
    );
};
