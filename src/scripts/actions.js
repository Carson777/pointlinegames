import STORE from './store'
import User from './models/userModel'
import {PostCollection,PostModel} from './models'
window.User = User

const ACTIONS = {
	createPost: function(post,title,header) {
		var newPostAttrs = {
			title: title,
			header: header,
			content: post,
			userId: User.getCurrentUser()._id,
			email: User.getCurrentUser().email,
			date: new Date()
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
					alert("Post Successfully Added")
					location.hash = 'blog/new'
				},
				function(err){
					console.log(err)
					alert("Post Failed. Give Carson an earful")
				})
		STORE._emitChange()
	},
	deletePost: function(model) {
		model.destroy()
			//.done(()=>alert(model.get('first_name') + 'deleted!'))
			.fail(()=>alert(model.get('first_name') + 'delete failed'))
		STORE._emitChange()
	},
	fetchProduct: function(product) {
		for(var i = 0; i < STORE._data.productCollection.length; i++){
			if(STORE._data.productCollection[i].name === product){
				STORE._set({
					detailProduct: STORE._data.productCollection[i]
				})
			}
		}
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
	fetchAllPosts: function(selectedPost) {
		var P = new PostCollection()
		P.fetch().then(
			function(){
				var temp = ''
				if(selectedPost === 'new'){
					var last = P.models.length - 1
					temp = P.models[last]
				} else {
					for(var i = 0; i < P.models.length; i++){
						if (P.models[i].attributes.title === selectedPost){
							temp = P.models[i]
						}
					}
				}
				STORE._set({
					postCollection: P,
					selectedPost: [temp]
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
		console.log("user being logged in")
		User.login(email, password)
			.then(
				function(resp){
					console.log(resp)
					alert('User succesfully logged in')
					location.hash = 'blog/new'
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
					location.hash = 'blog/new'
					reload()
				},
				function(err){
					console.log(err)
					alert('Logout Failed')
				})
	}

}

export default ACTIONS