import { connect } from 'react-redux';
import Carousel from '../../components/Carousel/Carousel';
import * as actions from '../../redux/actions/Carousel/CarouselActions';

const mapStateToProps = (state) => {
    return {
        carousel: state.carousel
    };
};

const CarouselContainer = connect(mapStateToProps, actions)(Carousel);

export default CarouselContainer;
