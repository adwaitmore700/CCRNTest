import {REDUX_CONSTANTS} from '../../utils/constants'

let initialState = {
    posts:[]
}

export const appReducer = (state=initialState, action) => {
    switch (action.type) {
        
        case REDUX_CONSTANTS.GET_POSTS_ACTION: 
            const postVals = [...state.posts, ...action.posts]
            return { ...state, posts: postVals };
        
        default:
            return state;
    }
}