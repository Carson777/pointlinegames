import STORE from './store'
import User from './models/userModel'
import {PostCollection,PostModel} from './models'
window.User = User

const ACTIONS = {
	createPost: function(post,title) {
		var newPostAttrs = {
			title: title,
			content: post,
			userId: User.getCurrentUser()._id,
			email: User.getCurrentUser().email
		}

		STORE._get('postCollection').add(newPostAttrs)
		var postModel = new PostModel(newPostAttrs)
		postModel.set({
			userId: User.getCurrentUser()._id
		})
		postModel.save()
			.then(
				function(resp){
					console.log(resp)
					alert("Task Successfully Added")
				},
				function(err){
					console.log(err)
					alert("Here's a task: learn to code!")
				})
		STORE._emitChange()
	},
	deletePost: function(model) {
		model.destroy()
			.done(()=>alert(model.get('first_name') + 'deleted!'))
			.fail(()=>alert(model.get('first_name') + 'delete failed'))
		STORE._emitChange()
	},
	fetchMyPosts: function() {
		var P = new PostCollection()
		P.fetch({
			data: {
				userId: User.getCurrentUser()._id
			}
		}).then(
			function(){
				STORE._set({
					postCollection: P
				})
			},
			function(err) {
				alert('error fetching')
				console.log(err)
			}
		)
	},
	fetchAllPosts: function() {
		var P = new PostCollection()
		P.fetch().then(
			function(){
				STORE._set({
					postCollection: P
				})
			},
			function(err) {
				alert('error fetching')
				console.log(err)
			}
		)
	},
	aboutViewChange: function(){
		location.hash = 'about'
	},
	storeViewChange: function(){
		location.hash = 'store'
	},
	forumViewChange: function(){
		location.hash = 'forum'
	},
	loginViewChange: function(){
		location.hash = 'login'
	},
	postViewChange: function(){
		location.hash = 'post'
	},
	profileViewChange: function(){
		location.hash = 'profile'
	},
	registerUser: function(userInputObj) {
		User.register(userInputObj)
			.then( 
				function(resp){
					console.log(resp)
					alert('User succesfully registered')
				},
				function(err){
					console.log(err)
					alert("That didn't work")
				}
			)
	},
	loginUser: function(email,password){
		User.login(email, password)
			.then(
				function(resp){
					console.log(resp)
					alert('User succesfully logged in')
					location.hash = 'forum'
				},
				function(err){
					console.log(err)
					alert('Login Failed')
				}
			)
	},
	logout: function(){
		User.logout()
			.then(
				function(resp){
					console.log(resp)
					alert('User successfully logged out')
					location.hash = 'login'
					STORE._emitChange
				},
				function(err){
					console.log(err)
					alert('Logout Failed')
				})
	}

}

export default ACTIONS