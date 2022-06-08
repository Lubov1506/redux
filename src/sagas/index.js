import { takeLatest}  from 'redux-saga/effects'
import {createUserSaga} from './usersSagas'
import ACTION_TYPES from '../actions/actionTypes'

 function* rootSaga () {
yield takeLatest(ACTION_TYPES.CREATE_USER_REQUEST, createUserSaga)
}
export default rootSaga
