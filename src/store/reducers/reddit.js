import {combineReducers} from 'redux';


function loading(state=false,action){
    switch(action.type){
        case 'FETCHING_POSTS':
            return {...state,loading:true}
        default:
            return state;
    }
}

function data(state=[],action){
    switch(action.type){
        case 'SHOW_POSTS':
            return action.data
        default:
            return state;
    }
}
function posts(state=[],action){
    switch(action.type){
        case 'ADD_POSTS':
            return action.data
        default:
            return state;
    }
}

const reddit = combineReducers({
    loading,
    data,
    posts
});
   


//reducer
export default reddit;