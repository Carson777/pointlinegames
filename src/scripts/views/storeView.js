import React from 'react'
import ACTIONS from '../actions'
import STORE from '../store'
import Header from './header'

var StoreView = React.createClass({
	componentWillMount: function() {
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
			<div>
				<Header />
				<StoreBody collection={this.state.productCollection}/>
			</div>
		)
	}
})
const StoreBody = React.createClass({
	render: function(){
		var col = this.props.collection
		return(
			<ul className='product-list'>
				{col.map(productModel=> <Product model={productModel} />)}
			</ul>
		)
	}
})
const Product = React.createClass({
	_showDeets: function() {
		var product = this.props.model.name
		location.hash = 'detail/' + product
	},
	render: function() {
		var product = this.props.model
		return (
			<li className = 'product'>
				<div className='left-product'>
					<img className= 'product-image' src={product.image}/>
				</div>
				<div className='right-product'>
					<h2 className='product-header'>
						{product.name}
					</h2>
					<div className='product-body'>
						<p> {product.description} </p>
					</div>
					<div className='product-footer'>
						<button className="product-button" onClick={this._showDeets}>Learn More</button>
						<form className="purchase-button" target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
							<input type="hidden" name="cmd" value="_s-xclick"/>
							<input type="hidden" name="hosted_button_id" value={product.id}/>
							<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
							<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
						</form>
					</div>
				</div>
			</li>
		)
	}
})
//<span className='text'>{this.props.model.get('post')}</span>
export default StoreView