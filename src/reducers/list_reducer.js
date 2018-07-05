import types from '../actions/types';

const DEFAULT_STATE = {
    all: []
};

export default (state = DEFAULT_STATE, action) => {
    switch(action.type){
        case types.GET_LIST_DATA:
            console.log('GET LIST DATA:', action)
            return state;
        default:
            return state;
    }
}