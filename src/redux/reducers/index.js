import { combineReducers } from 'redux';
import CarouselReducer from './Carousel/CarouselReducer';

export default combineReducers({
    carousel: CarouselReducer
});
