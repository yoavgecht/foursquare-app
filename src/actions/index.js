import axios from 'axios';
import {ADD_PARTICIPANT, INCREASE_PARTICIPANT_VOTE, FETCH_VENUES, CLEAN_PARTICIPANTS} from './types';

export const fetchVenues = (searchTerm) => async (dispatch) => {
    try {
        const res = await axios.get(`https://api.foursquare.com/v2/venues/search?client_id=VHLN2OXT2Q4JKVW21ACRW4FF1YR0I50WZWQLQMKBLPN1T1J5&v=20170801&query=
            lunch&near=${searchTerm}&client_secret=OHBZO41UXZWK1B1NEJG2JG2O52DCBSU13TIJSDVWTXXRIH5T&limit=3`)
            dispatch({type: FETCH_VENUES, payload: res.data.response.venues});
        } catch (err) {
            dispatch({type: FETCH_VENUES, payload: []});
        }
}

export const addParticipant = () => {
    return {
        type: ADD_PARTICIPANT,
        payload: null
    }  
}

export const increaseParticipantVote = (name, index) => {
    debugger;
    return {
        type: INCREASE_PARTICIPANT_VOTE,
        payload: {
            name,
            index
        }
    }  
}

export const cleanParticipants = () => {
    debugger;
    return {
        type: CLEAN_PARTICIPANTS,
        payload: null
    }  
}
