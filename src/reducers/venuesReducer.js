import { FETCH_VENUES } from '../actions/types'
export default function(state = null, action) {
    switch(action.type) {
        case FETCH_VENUES:
        return [
            ...action.payload
            ];
        default:
        return state;
    }
}