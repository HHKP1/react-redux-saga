import {takeEvery, put, call} from "redux-saga/effects"
import {FETCH_POST, REQUEST_POSTS} from "./types"
import {hideLoader, showLoader, showAlert} from "./actions";

export function* sagaWatcher() {
    yield takeEvery(REQUEST_POSTS, sagaWorker)
}
function* sagaWorker() {
    try {
        yield put(showLoader())
        const payload = yield call(fetchPosts)
        yield put({type: FETCH_POST, payload})
        yield put(hideLoader())
    } catch (e) {
        yield put(showAlert('Something is wrong...'))
        yield put(hideLoader())
    }
}

async function fetchPosts() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    return await res.json()
}