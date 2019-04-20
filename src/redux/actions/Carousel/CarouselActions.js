import {
    GET_TABS,
    IS_TABS_LOADING,
    SET_ACTIVE_TAB
} from '../../constants/actionTypes';
import data from '../../../../res/slider_data.json';

export const getTabsForCarouselAsync = () => {
    return (dispatch) => {
        dispatch({ type: IS_TABS_LOADING });
        
        //API Call

        //API Call success func call back
        getTabsForCarouselSuccess(dispatch, data);
    };
};

export const getTabsForCarouselSuccess = (dispatch, payload) => {
    dispatch({ 
        type: GET_TABS, 
        data: payload
    });
};

export const setActiveTab = (index) => {
    return {
        type: SET_ACTIVE_TAB,
        index
    };
};
