export function getPosts(search){
    return { 
        type:'GET_POSTS',
        search
    }
}

export function showPosts(data){
    return { 
        type:'SHOW_POSTS',
        data:[]
    }
}

export function addPosts(data){
    return { 
        type:'ADD_POSTS',
        data:[]
    }
}

export function fechtingPosts(search){
    return{
        type:'FETCHING_POSTS',
        search
    }
}