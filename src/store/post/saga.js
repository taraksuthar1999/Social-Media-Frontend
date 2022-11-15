import { takeEvery, call, put, take } from "redux-saga/effects";
import { actions } from "./actions";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

function* getPosts({ payload }) {
    try {
      const {tag} = payload
      const response = yield call(async () => {
        return await axios
          .post(`http://localhost:3009/api/v1/post`)
          .then((res) => {
            return res;
          });
      });
      yield put(actions.getPostsSuccess(response.data.data));
    //   payload.onLoginSuccess()
    } catch (error){
      console.log(error)    
    }
}
function* getPost({ payload }) {
    try {
      const {id} = payload
      const response = yield call(async () => {
        return await axios
          .get(`http://localhost:3009/api/v1/post/${id}`)
          .then((res) => {
            return res;
          });
      });
      console.log(response.data.data)
      yield put(actions.getPostSuccess(response.data.data[0]));
    } catch (error){
      console.log(error)    
    }
}
function* commentAdd({ payload }) {
    try {
      const {message,parentId,callback} = payload
      const response = yield call(async () => {
        return await axios
          .post(`http://localhost:3009/api/v1/comment/add`,{message,parentId})
          .then((res) => {
            return res;
          });
      });
      if(response) callback()
      yield put(actions.commentAddSuccess({}));

    } catch (error){
      console.log(error)    
    }
}


export function* postSaga() {
    yield takeEvery(actions.getPosts, getPosts);
    yield takeEvery(actions.commentAdd, commentAdd);
    yield takeEvery(actions.getPost, getPost);
}