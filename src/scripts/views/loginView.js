import React from 'react'
import ACTIONS from '../actions'
import STORE from '../store'
import Header from './header'


var LoginView = React.createClass({
	componentWillMount: function() {
		STORE.on('storeChanged',()=>{
			this.setState(STORE._getData())
		})
	},
	getInitialState: function() {
		return STORE._getData()
	},
	render: function(){
		return(
			<div className='login-view'>
				<Header />
				<Login />
			</div>
		)
	}
})
var Register = React.createClass({
	_handleSubmit: function(eventObj){
		eventObj.preventDefault()
		var userInput = {
			email: eventObj.target.daEmail.value,
			password: eventObj.target.daPassword.value
		}

		ACTIONS.registerUser(userInput)
	},
	render: function() {
		return (
			<form onSubmit={this._handleSubmit}>
				<h4 className='view-title'>Haven't registered yet? Sign Up here!</h4>
				<input type='email'    name='daEmail'    placeholder="Email" />
				<input type='password' name='daPassword' placeholder='Password'/>
				<button type='submit'>Submit</button>
			</form>
		)
	}
})

var Login = React.createClass({
	_handleSubmit: function(eventObj){
		console.log("login info submitted")
		eventObj.preventDefault()
		ACTIONS.loginUser(eventObj.target.daEmail.value, eventObj.target.daPassword.value)
	},
	render: function() {
		return (
			<form onSubmit={this._handleSubmit}>
				<h4>Login Here</h4>
				<input type='email'	name='daEmail' placeholder='Email' />
				<input type='password' name='daPassword' placeholder='Password' />
				<button type='submit'>Log In</button>
			</form>
		)
	}	
})
//<span className='text'>{this.props.model.get('post')}</span>
export default LoginView