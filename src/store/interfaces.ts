
import { AnyAction } from "redux";
import { InferableComponentEnhancerWithProps } from 'react-redux';
import { ThunkDispatch }from 'redux-thunk';

export type TypeOfConnect<T> = T extends InferableComponentEnhancerWithProps<infer Props, infer _>
  ? Props
  : never
;
export type ThunkDispatch = ThunkDispatch<IRootState, IExtraDispatchArguments, AnyAction>





export interface IAuth {
	token: string;
	status: string;
	hasLoadedOnce: boolean;
}

export type IProfile = {
	name: string;
}

export interface IUser {
	status: string;
	profile: null | IProfile;
}

export interface IRootState {
	auth: IAuth;
	user: IUser;
}

export interface IExtraDispatchArguments {

}