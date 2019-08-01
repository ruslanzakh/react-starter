import * as types from './actionTypes';
import { IAuth, IRootState } from '../interfaces';

const initialState: IAuth = {
	token: localStorage.getItem('user-token') || '',
	status: '',
	hasLoadedOnce: false,
}

interface ICommonAction {
	type: typeof types.AUTH_REQUEST | typeof types.AUTH_ERROR | typeof types.AUTH_LOGOUT;
}
interface ISuccessAction {
	type: typeof types.AUTH_SUCCESS;
	payload: string;
}

type TypeAction =  ICommonAction | ISuccessAction;

export default function reduce(state = initialState, action: TypeAction) {
	switch (action.type) {
		case types.AUTH_REQUEST:
			return {
				...state,
				status: 'loading',
			}
		case types.AUTH_SUCCESS:
			return {
				...state,
				status: 'success',
				token: action.payload,
				hasLoadedOnce: true
			}
		case types.AUTH_ERROR:
			return {
				...state,
				status: 'error',
				hasLoadedOnce: true
			}
		case types.AUTH_LOGOUT:
			return {
				...state,
				token: '',
			}
		default:
			return state;
	}

}


export function getIsAuthenticated(state: IRootState): boolean {
	return !!state.auth.token;
}
export function getAuthStatus(state: IRootState): string {
	return state.auth.status;
}