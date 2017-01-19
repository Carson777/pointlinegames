import React from 'react'
import ACTIONS from '../actions'
import STORE from '../store'
import Header from './header'

var ForumView = React.createClass({
	componentWillMount: function() {
		ACTIONS.fetchAllPosts()
		STORE.on('storeChanged',()=>{
			this.setState(STORE._getData())
		})
	},
	getInitialState: function() {
		return STORE._getData()
	},
	render: function(){
		return(
			<div className='home-view'>
				<Header />
				<h2 className='view-title'> All Posts</h2>
				<PostDisplay collection={this.state.postCollection}/>
			</div>
		)
	}
})

var PostDisplay = React.createClass({
	_makePost: function(postModel) {
		return <Post model={postModel} />
	},
	render: function(){
		var coll = this.props.collection
		console.log(coll)
		return(
			<div className='post-display'>
				<ul>
	 				{coll.map(this._makePost).reverse()}
	 			</ul>
			</div>
		)
	}
})
var Post = React.createClass({
	render: function(){
		var title = this.props.model.get('title')
		var content = this.props.model.get('content')
		var email = this.props.model.get('email')
		return(
			<li className='post'>
				<h3>{title}</h3>
				<h4>Body: {content}</h4>
				<p>User: {email}</p>
			</li>
		)
	}
})
//<span className='text'>{this.props.model.get('post')}</span>
export default ForumView