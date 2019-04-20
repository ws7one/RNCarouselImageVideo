import {
    GET_TABS,
    IS_TABS_LOADING,
    SET_ACTIVE_TAB
} from '../../constants/actionTypes';

const INITIAL_STATE = {
    isLoading: false,
    tabsForCarousel: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case IS_TABS_LOADING: 
            return {
                ...state,
                isLoading: false
            };

        case GET_TABS: {
            const tabs = action.data.items.map(t => {
                return {
                    ...t,
                    paused: true
                };
            });
            return {
                ...state,
                isLoading: true,
                tabsForCarousel: tabs,
                pageInfo: action.data.pageInfo
            };
        }

        case SET_ACTIVE_TAB: {
            const newTabs = state.tabsForCarousel.map((t, i) => {
                return {
                    ...t,
                    paused: i !== action.index
                };
            });
            return {
                ...state,
                tabsForCarousel: newTabs,
            };
        }
        
        default:
            return state;
    }
};
