import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './redux/reducers';
import Carousel from './containers/Carousel/CarouselContainer';

class App extends Component {
    render() {
        const store = createStore(
            reducers,
            applyMiddleware(ReduxThunk)
        );
        return (
            <Provider store={store}>
                <Carousel />
            </Provider>
        );
    }
}
export default App;
