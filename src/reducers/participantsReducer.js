import { ADD_PARTICIPANT, INCREASE_PARTICIPANT_VOTE, CLEAN_PARTICIPANTS } from '../actions/types';

export default function(state = [], action) {
    switch(action.type) {
        case ADD_PARTICIPANT:
            const participant = {
                id: 0,
                name: '',
                counterVenue0: 0,
                counterVenue1: 0,
                counterVenue2: 0,
                voted: false
            }
            return [
                ...state,
               participant
            ];

         case INCREASE_PARTICIPANT_VOTE:
            debugger;
            const participants = [...state];
            participants[action.payload.index][action.payload.name] = participants[action.payload.index][action.payload.name] + 1;
            participants[action.payload.index].voted = true;
            return participants;
        
        case CLEAN_PARTICIPANTS:
             return [];
             
        default:
            return state;
    }
}