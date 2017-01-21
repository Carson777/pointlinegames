import React from 'react'
import ACTIONS from '../actions'
import STORE from '../store'
import Header from './header'

var DetailView = React.createClass({
	componentWillMount: function() {
		ACTIONS.fetchProduct(this.props.product)
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
				<DetailProduct product = {this.state.detailProduct} />
			</div>
		)
	}
})
const DetailProduct = React.createClass({
	render: function() {
		var product = this.props.product
		return (
			<li className = 'd-product'>
				<div className='d-left-product'>
					<img className= 'd-product-image' src={product.image}/>
				</div>
				<div className='d-right-product'>
					<h2 className='d-product-header'>
						{product.name}
					</h2>
					<ul className='d-product-body'>
						<li> Style: {product.style} </li>
						<li> Age Rec: {product.age} </li>
						<li><p></p></li>
						<li> Includes: 
							<ul>
								<li> {product.contents.instructions} </li>
								<li> {product.contents.board} </li>
								<li> {product.contents.red} </li>
								<li> {product.contents.blue} </li>
							</ul>
						</li>
						<li><p></p></li>	
					</ul>
					<div className='d-product-footer'>
						<p className="d-purchase-price"> Price: {product.price} </p>
						<form className="d-purchase-button" target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
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
export default DetailView