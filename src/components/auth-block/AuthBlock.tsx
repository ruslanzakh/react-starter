import React from 'react';
import { connect } from 'react-redux';
import { Wrapper } from './style';
import * as authGetters from 'store/auth/reducer';
import authActions from 'store/auth/actions';
import userActions from 'store/user/actions';
import * as userTypes from 'store/user/actionTypes';
import * as authTypes from 'store/auth/actionTypes';
import { IRootState, IProfile, TypeOfConnect, ThunkDispatch } from 'store/interfaces';

function mapStateToProps(state: IRootState) {
	return {
	  status: authGetters.getAuthStatus(state),
	  token: state.auth.token,
	  user: state.user.profile,
	  isAuthenticated: authGetters.getIsAuthenticated(state)
	};
}
const mapDispatchToProps = (dispatch: ThunkDispatch) => {
	return {
		authLogin: (user:IProfile) => dispatch(authActions[authTypes.AUTH_REQUEST](user)),
		authLogout: () => dispatch(authActions[authTypes.AUTH_LOGOUT]()),
		userAuth: () => dispatch(userActions[userTypes.USER_REQUEST]()),
	};
};

const storeEnhancer = connect(mapStateToProps, mapDispatchToProps);

type AppProps = {}
  & TypeOfConnect<typeof storeEnhancer>;

class AuthBlock extends React.Component<AppProps> {
	componentWillMount(){
		if(this.props.isAuthenticated) {
			this.props.userAuth();
		}
	}
	loginClick = () => {
		this.props.authLogin({name: '123'})
	}
	logoutClick = () => {
		this.props.authLogout()
	}
	render(){
		const userName = this.props.user ? this.props.user.name : '';
		let button;
		if(this.props.isAuthenticated) {
			button = <button onClick={this.logoutClick}>Выйти</button>
		} else {
			button = <button onClick={this.loginClick}>Авторизоваться</button>
		}
		return (
			<div>
				{this.props.status && <Wrapper>{this.props.status}</Wrapper>}
				{userName && <Wrapper>{userName}</Wrapper>}
				{button}
			</div>
		)
	}
}

export default storeEnhancer(AuthBlock)