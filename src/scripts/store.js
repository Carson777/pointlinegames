import Backbone from 'backbone'
import _ from 'underscore'
import {PostCollection,PostModel,ProductCollection,ProductModel} from './models'

const STORE = _.extend(Backbone.Events,{
	_data: {
		postCollection: new PostCollection(),
		productCollection: new ProductCollection()
	},

	_emitChange: function() {
		this.trigger('storeChanged')
	},

	_get: function(prop) {
		return this._data[prop]
	},

	_getData: function() {
		return this._data
	},

	_initialize: function() {
		var citadel = {
			name: "Citadel",
			id: "9GNJ59QCMP3BE",
			history: "Germany",
			price: "$25.00",
			image: 'images/citadel2.png',
			description: 'Also known as “Ringo”, this game is believed to have originated in Germany in the 1800s.  Suitable for adults and children 10 or above, the object of this game is for the attackers to storm the citadel and land two pieces into the center of the board.  The defenders have to work together to try to capture the attackers and defend the citadel.'
		}
		var tablut = {
			name: "Tablut",
			id: "5KK242R7N2Z7J",
			history: "Finland",
			price: "$25.00",
			image: 'images/tablut2.png',
			description: 'A Finnish variant of an ancient Viking game called Hnefatfl or “King’s Table”.  In this game the Swedes must escort their King to safety at the side of the board while the ambushing Muscovites attack.  Recommended for adults and children 12 years old and above'
		}
		var pretwa = {
			name: "Pretwa",
			id: "BC3HDGH3BHKXU",
			history: "India",
			price: "$25.00",
			image: 'images/pretwa2.png',
			description: 'Originally from Bihar, India, this beautiful game is suitable for adults and children 8 years old and above.  The object of the game is to capture all of the opponent’s pieces by leaping over them to a vacant space beyond either along a line or arc.  At the same time you want to prevent your opponent from doing the same to you.'
		}
		var shangChee = {
			name: "Shang Chee",
			id: "UWLBH3CH59FCA",
			history: "China",
			price: "$25.00",
			image: 'images/shang chee2.png',
			description: 'The Chinese version of this game is Xiang Qi, also known as Chinese chess.  This a western adaptation of the Chinese game.  The pieces have been modified to allow western players to understand and play this fascinating chess variant.  For adults or teenagers only.'
		}
		var shogi = {
			name: "Shogi",
			id: "TQ854J6MXC44L",
			history: "Japanese",
			price: "$25.00",
			image: 'images/shogi2.png',
			description: 'This is a western adaptation of the Japanese game of Shogi.  Shogi is believed to be the most complex of all chess variants.  Of limited popularity outside of Japan due to the game’s reliance on Japanese iconography, this adaptation has been made specifically to allow western players to learn how to play and enjoy this most complex of games.  Recommended for adults only.'
		}
		var surakarta = {
			name: "Surakarta",
			id: "53PGYGRGJZGWA",
			history: "Indonesia",
			price: "$25.00",
			image: 'images/surakarta2.png',
			description: 'Named after the city of Surakarta in Java, Indonesia, the object of this deceptively simple game is to capture all of your opponent’s pieces.  To do so you must move along a line over any number of unoccupied points including a circular loop.  It sounds simple, the complexity increases as the game goes on.  Recommended for adults and children 12 years old and above.'
		}
		var tigerGame = {
			name: "Three Tigers",
			id:"BJEA9PNGVA6N6",
			history: "India",
			price: "$25.00",
			image: 'images/three tigers2.png',
			description: 'Originally from India, Three Tigers is a capture game where three tigers try to “eat” five goats by jumping over them.  The brave goats try to surround and immobilize the three tigers.  This game is recommended for adults and children 8 years old and above.'
		}
		var list = [citadel, tablut, pretwa, shangChee, shogi, surakarta, tigerGame]
		this._set({
				productCollection: list
			})
		this._get('postCollection').on('update',()=>{
			this._emitChange()
		})
	},

	_set: function(newData) {
		this._data = _.extend(this._data,newData)
		this._emitChange()
	}
})

STORE._initialize()

export default STORE