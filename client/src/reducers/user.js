import {AUTH} from '../constants/actionTypes';
import {LOGOUT} from '../constants/actionTypes';
const User=(state=null,action)=>{
    switch (action.type) {
        case AUTH:
            localStorage.setItem('profile',JSON.stringify({...action?.data}));
            return state;
        case LOGOUT:
            console.log('hi')
            localStorage.clear();
            return state;
        default:
            return state;
    }
}
export default User;