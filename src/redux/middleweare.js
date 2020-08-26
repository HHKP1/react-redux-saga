import { showAlert} from "./actions";
import {CREATE_POST} from "./types";

const forbidden = ['fuck', 'suck`s', 'react' ]
export function stopWordsMiddleware({ dispatch }) {
    return function(next) {
        return function(action) {
            if ( action.type === CREATE_POST) {
                   const found = forbidden.filter(w => action.payload.title.toLowerCase().includes(w))
                if (found.length) {
                    return dispatch(showAlert('you are spammer, go away from Us'))
                }
            }
            return next(action)
        }
    }
}