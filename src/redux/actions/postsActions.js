import {REDUX_CONSTANTS} from '../../utils/constants';
import {getPosts} from '../../api/postsApi';

export const GET_POSTS = (pageNo)=>{
    return async (dispatch)=>{
        let posts = await getPosts(pageNo);
        console.log(`adwawa ${posts}`);
        debugger;
        if(posts){
            dispatch({
                type:REDUX_CONSTANTS.GET_POSTS_ACTION,
                posts:posts
            });
        }
        else{
            //dispatch error
        }
        return true;
    }
}