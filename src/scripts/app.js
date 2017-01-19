import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import AboutView from './views/aboutView'
import StoreView from './views/storeView'
import PostView from './views/postView'
import LoginView from './views/loginView'
import ForumView from './views/forumView'
import ProfileView from './views/profileView'
const app = function() {


	const Router = Backbone.Router.extend({
		routes: {
			"about": "handleAbout",
			"store": "handleStore",
			"forum": "handleForum",
			"login": "handleLogin",
			"post": "handlePost",
			"profile": "handleProfile",
			"*default": "handleDefault"
		},

		handleAbout: function() {
			ReactDOM.render(<AboutView />, document.querySelector(".container"))
		},
		handleStore: function() {
			ReactDOM.render(<StoreView />, document.querySelector(".container"))
		},
		handleForum: function() {
			console.log('handling forum')
			ReactDOM.render(<ForumView />, document.querySelector(".container"))
		},
		handleLogin: function() {
			ReactDOM.render(<LoginView />, document.querySelector(".container"))
		},
		handlePost: function() {
			ReactDOM.render(<PostView />, document.querySelector(".container"))
		},
		handleProfile: function() {
			ReactDOM.render(<ProfileView />, document.querySelector(".container"))
		},
		handleDefault: function(){
			location.hash = "store"
		},
		initialize: function() {
			Backbone.history.start()
		}

	})

	new Router()

	
}


app()