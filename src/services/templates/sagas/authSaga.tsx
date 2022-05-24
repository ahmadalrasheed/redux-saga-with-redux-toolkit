import { call, put, takeEvery } from 'redux-saga/effects';
import { succeededAuth } from '../../apis';
import { store } from '../../../app/store';
import axios from 'axios';
function FetchData() {
    // console.log('from fetch data');
    console.log('store?.getState?.()', store?.getState?.().auth.userInfo);

    return call(() => axios.post('https://reqres.in/api/login', store?.getState?.().auth.userInfo));
}
function* getAuthInfo(): any {
    const userAuthInfo = yield FetchData();

    return yield put(succeededAuth(userAuthInfo.data));
}
function* authSaga() {
    yield takeEvery('auth/requestAuth', getAuthInfo);
}
export default authSaga;
