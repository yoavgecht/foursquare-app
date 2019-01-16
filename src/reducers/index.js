import { combineReducers } from 'redux';
import venuesReducer from './venuesReducer';
import participantsReducer from './participantsReducer';

//books - state
const rootReducer = combineReducers({
    venues: venuesReducer,
    participants: participantsReducer
});

export default rootReducer;