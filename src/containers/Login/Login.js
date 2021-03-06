// Style
import './_Login';
// React & Redux
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// Components
import LoginForm from '../../components/Login/Login';
// Actions
import * as AppActions from '../../actions/app-actions';

class Login extends Component {
	constructor(props) {
		super(props);
		this._onLogin = ::this._onLogin;
	}

	_onLogin(user) {
		const { login } = this.props.appActions;
		login(user, () => {
			location.reload();
		});
	}

	render() {
		return (
		    <div className="container">
		    	<LoginForm
		    	    onSubmitHandler={this._onLogin}/>
		    </div>
		);
	}
}

Login.propTypes = {
	appState  : PropTypes.object.isRequired,
	appActions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
	return {
		appState: state.app.toJS()
	};
}

function mapDispatchToProps(dispatch) {
	return {
		appActions: bindActionCreators(AppActions, dispatch)
	};
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Login);
