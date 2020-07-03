import {takeEvery,select,takeLatest,call,put,take} from 'redux-saga/effects';
import axios from 'axios';

function*  apiGet(){
    const response = yield axios.get('http://newsapi.org/v2/top-headlines?pageSize=50&sources=google-news-br&apiKey=9ade77a3f8824659aa776b3893443c91');
    yield put({type:'SHOW_POSTS',data:response.data.articles})
}

function* getPosts(){
    yield call(apiGet)
}


function* apiFetch(search){
  const url = `http://newsapi.org/v2/everything?q=${search}&apiKey=9ade77a3f8824659aa776b3893443c91`;
  const response =  yield axios.get(url);
  console.log(response)
  yield put({type:'ADD_POSTS',data:response.data.articles})
}








export default function* root(search) { 
  yield takeLatest('GET_POSTS',getPosts)
  while(true){
    const {search} = yield take('FETCHING_POSTS');
    yield call(apiFetch,search)
  }
  

}
/*, takeLatest, , /*, select*/



//top-headlines?sources=google-news-br&apiKey=API_KEY
//


//http://newsapi.org/v2/everything?q=bitcoin&apiKey=API_KEY