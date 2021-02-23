import { AddSessionAction } from '../actions/sessionAction';
import { getSession } from '../../assets/variables';
export const SESSION = 'SESSION';

export  interface CurrentUser {
    id: number,
    name: string,
    surname: string,
}

export interface Session {
    isLog: boolean,
    currentUser: CurrentUser
}

export interface SessionState {
    session: Session
}

const initialState: SessionState = {
    session: getSession()
};

export const SessionReducer = (state = initialState, action: AddSessionAction): SessionState => {
    switch (action.type) {
        case SESSION:
            return {
                session: action.payload
            }
        default:
            return state;
    }
};
