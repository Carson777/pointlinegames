import React from 'react'
import ACTIONS from '../actions'
import STORE from '../store'
import User from '../models/userModel'
window.User = User

const Header = React.createClass({
	getUser: function(){
		if(User.getCurrentUser()){
			return User.getCurrentUser().email
		} else {
			return "none"
		}
	},
	render: function(){
		return(
			<div className='header'>
				<div className='header-top'>
					<div className='header-title'>
						<h2>Point</h2>
						<h2>Line</h2>
						<h2>Games</h2>
					</div>
				</div>
				<div className='header-nav'>
					<nav>
						<a className='link' href="#store">Store</a>
						<a className='link2' href="#about">About Us</a>
					</nav>
				</div>
			</div>
		)
	}
})
export default Header