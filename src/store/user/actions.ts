import apiCall from 'utils/mock-api';
import authActions from '../auth/actions';
import * as authTypes from '../auth/actionTypes';
import * as types from './actionTypes';
import { IProfile, ThunkDispatch } from '../interfaces';

export const userRequest = () => async (dispatch: ThunkDispatch) => {
	dispatch({type: types.USER_REQUEST});
	apiCall({url: 'user/me'})
		.then((resp: IProfile) => {
			dispatch({type: types.USER_SUCCESS, payload: resp});
		})
		.catch((err: Error) => {
			dispatch({type: types.USER_ERROR});
			dispatch(authActions[authTypes.AUTH_LOGOUT]());
		})
}

export default {
	[types.USER_REQUEST]: userRequest,
}
