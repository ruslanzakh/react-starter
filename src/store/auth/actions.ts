import apiCall from 'utils/mock-api';
import userActions from '../user/actions';
import * as types from './actionTypes';
import * as userTypes from '../user/actionTypes';
import { IProfile, ThunkDispatch } from '../interfaces';


export const authLogout = () => async (dispatch: ThunkDispatch) => {
	localStorage.removeItem('user-token');
	dispatch({type: types.AUTH_LOGOUT});
}

export const authRequest = (user: IProfile) => async (dispatch: ThunkDispatch) => {
	dispatch({type: types.AUTH_REQUEST});
	apiCall({url: 'auth', data: user, method: 'POST'})
		.then((resp: {token: string}) => {
			localStorage.setItem('user-token', resp.token);
			// Here set the header of your ajax library to the token value.
			// example with axios
			// axios.defaults.headers.common['Authorization'] = resp.token
			dispatch({type: types.AUTH_SUCCESS, payload: resp.token});
			dispatch(userActions[userTypes.USER_REQUEST]());
			return resp;
		})
		.catch((err: Error) => {
			dispatch({type: types.AUTH_ERROR, payload: err});
			localStorage.removeItem('user-token');
		})
}

export default {
	[types.AUTH_LOGOUT]: authLogout,
	[types.AUTH_REQUEST]: authRequest,
}