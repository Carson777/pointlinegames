import React from 'react'
import ACTIONS from '../actions'
import STORE from '../store'
import Header from './header'

var BlogView = React.createClass({
	componentWillMount: function() {
		ACTIONS.fetchAllPosts(this.props.post)
		STORE.on('storeChanged',()=>{
			this.setState(STORE._getData())
		})
	},
	getInitialState: function() {
		return STORE._getData()
	},
	render: function(){
		console.log(this.state)
		return(
			<div className='home-view'>
				<Header />
				<h2 className='blog-title'> Blog</h2>
				<PostDisplay classname='post-display' collection={this.state}/>
				<PostArchiveDisplay classname='post-archive-display' collection={this.state.postCollection}/>
			</div>
		)
	}
})

var PostDisplay = React.createClass({
	_makePost: function(postModel) {
		return <Post model={postModel} />
	},
	render: function(){
		var coll = this.props.collection.selectedPost
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
	_cleanDate: function(){
		var date = this.props.model.get('createdAt')
		var cleanDate = date.substring(0, 10)
		return cleanDate
	},
	render: function(){
		var header = this.props.model.get('header')
		var content = this.props.model.get('content')
		return(
			<li className='post'>
				<h3 className='postHeader'>{header}</h3>
				<p className='postDate'>{this._cleanDate()}</p>
				<p className='postContent'>{content}</p>
				<Delete model={this.props.model}/>
			</li>
		)
	}
})
var Delete = React.createClass({
	deletePost: function(){
		ACTIONS.deletePost(this.props.model)
		reload()
	},
	render: function(){
		if(User.getCurrentUser()){
			return(
				<div>
					<button onClick={this.deletePost}>Delete Post</button>
				</div>
			)
		} else {
			return(
				<div>
				</div>
			)
		}
	}
})
var PostArchiveDisplay = React.createClass({
	_makePostLink: function(postLinkModel) {
		return <PostLink model={postLinkModel} />
	},
	render: function(){
		var coll = this.props.collection
		return(
			<div className='post-archive'>
				<h2 className='archive-title'> Archive</h2>
				<ul className='archive-list'>
	 				{coll.map(this._makePostLink).reverse()}
	 			</ul>
	 			<a className='link4' href="#login">Admin Login</a>
			</div>
		)
	}
})
var PostLink = React.createClass({
	_changePost: function(){
		var title = this.props.model.get('title')
		location.hash = 'blog/' + title
		STORE._set({
					selectedPost: [this.props.model]
				})
	},
	render: function(){
		var header = this.props.model.get('header')
		return(
			<li className='post-archive-title'>
				<button className="post-button" onClick={this._changePost}>{header}</button>
			</li>
		)
	}
})
//<span className='text'>{this.props.model.get('post')}</span>
export default BlogView