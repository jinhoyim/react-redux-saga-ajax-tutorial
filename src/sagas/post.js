import { delay } from 'redux-saga';
import { call, put, takeEvery, fork } from 'redux-saga/effects';
import * as service from '../services/post';
import * as actions from '../actions/post';

function* fetchPost(action){
  try{
    yield put(actions.requestPost());
    const [post, comments] = yield [
      call(service.getPost, action.postId),
      call(service.getComments, action.postId)
    ];
    yield put(actions.receivePost(post, comments));
  } catch(e){
    yield put(actions.receivePostFailed());
  }

  // if(post && comments && !postFailed && !commentsFailed)
  // {
  //   yield put(actions.receivePost(post, comments));
  // }
  // else
  // {
  //   yield put(actions.receivePostFailed());
  // }
}

function* watchFetchPost(){
  yield takeEvery('FETCH_POST', fetchPost);
}

function* showWarning(action){
  yield delay(1500);
  yield put(actions.hideWarning());
}

function* watchReceivePostFailed(){
  yield takeEvery('RECEIVE_POST_FAILED', showWarning);
}

export default function* postSaga(){
  yield fork(watchFetchPost);
  yield fork(watchReceivePostFailed);
}