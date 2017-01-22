import React from 'react'
import ACTIONS from '../actions'
import STORE from '../store'
import Header from './header'

var HomeView = React.createClass({
	componentWillMount: function() {
		//ACTIONS.fetchAllPosts()
		STORE.on('storeChanged',()=>{
			this.setState(STORE._getData())
		})
	},
	getInitialState: function() {
		return STORE._getData()
	},
	render: function(){
		return(
			<div>
				<Header />
				<div className='home-view'>
					<div className='home-left'>
					<img className= 'home-logo' src='images/logo2.png'/>
					</div>
					<div className='home-right'>
						<h2 className='home-title'> About us</h2>
						<p className='home-body'> Our goal is to provide to you, your family and your friends with the best in unsual, ancient or abandoned board games. It is our hope that these games will entertain and challenge players in an environment of mutual enjoyment and discovery.</p>
						<h2 className='home-title'> Contact us</h2>
						<p className='home-body'>We can be reached at pointlinegames@gmail.com</p>
					</div>
				</div>
			</div>
		)
	}
})
//<span className='text'>{this.props.model.get('post')}</span>
export default HomeView