import { combineReducers } from 'redux';
import user from './user_reducer'

const rootReducer = combineReducers({
    //user 기능추가 될때마다 리듀서 따로 만듬
    user
})

export default rootReducer;