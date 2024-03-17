import {CREATE,DELETE,FETCH_ALL_POSTS, UPDATE} from '../constants/actionTypes';
export default (posts=[],action)=>{
     switch (action.type) {
        case CREATE:
            console.log(`action.payload1:${action?.payload}`)
            return [...posts,action?.payload]
        case FETCH_ALL_POSTS:
            console.log('Me')
            console.log(action?.payload)
            console.log(posts)
            return [action?.payload]   
        case UPDATE:
             return [...posts,action?.payload]
        case DELETE:
             return posts.filter(post=>post._id!==action?.payload);     
        default:
            return posts;
     }
}

