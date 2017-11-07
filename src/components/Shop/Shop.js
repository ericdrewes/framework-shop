import React from 'react'
import { connect } from 'react-redux'
import ProductTile from './ProductTile/ProductTile'

import './Shop.css'

import { addToCart } from '../../ducks/product'

export function Shop({ addToCart, products }) {
const productTiles = products.map( (product) => (
		<ProductTile
			addToCart={ () => addtoCart(product.id)}
			key={product.id}
			name={product.name}
			logo={product.logo}
			price={product.price}
		/>
	));

	return (
		<div className="shop">
			<h1 className="shop__header">Shop</h1>
			<div className="shop__products-wrapper">{productTiles}
		</div>
	);
}

function mapStateToProps({ products }) {
	return { products }
}
export default connect(mapStateToProps, { addToCart })(Shop)
