import * as types from './actionTypes';
import * as authTypes from '../auth/actionTypes';
import { IUser, IRootState, IProfile } from '../interfaces';


const initialState: IUser = {
	status: '',
	profile: null,
}

interface IAction {
	type?: string;
	payload?: string;
}

interface ICommonAction {
	type: typeof types.USER_REQUEST | typeof types.USER_ERROR | typeof authTypes.AUTH_LOGOUT;
}
interface ISuccessAction {
	type: typeof types.USER_SUCCESS;
	payload: string;
}

type TypeAction =  ICommonAction | ISuccessAction;
export default function reduce(state = initialState, action: TypeAction) {
	if(!action.type) return state;
	switch (action.type) {
		case types.USER_REQUEST:
			return {
				...state,
				status: 'loading',
			}
		case types.USER_SUCCESS:
			return {
				...state,
				status: 'success',
				profile: action.payload,
			}
		case types.USER_ERROR:
			return {
				...state,
				status: 'error'
			}
		case authTypes.AUTH_LOGOUT:
			return {
				...state,
				profile: null,
			}
		default:
			return state;
	}

}


export function getIsAuthenticated(state: IRootState): boolean {
	return !!state.auth.token;
}
export function getProfile(state: IRootState): null | IProfile {
	return state.user.profile;
}