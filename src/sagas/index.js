import { takeLatest}  from 'redux-saga/effects'
import {createUserSaga, getUsersSaga} from './usersSagas'
import ACTION_TYPES from '../actions/actionTypes'

 function* rootSaga () {
yield takeLatest(ACTION_TYPES.CREATE_USER_REQUEST, createUserSaga)
yield takeLatest(ACTION_TYPES.GET_USERS_REQUEST, getUsersSaga)
}
export default rootSaga
