import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Landing from './components/Landing/Landing'
import Details from './components/Details/Details'
import Cart from './components/Cart/Cart'
import Shop from './components/Shop/Shop'
import ThankYou from './components/ThankYou/ThankYou'

export default (
	<Switch>
		<Route exact path="/" component={Landing} />
		<Route path="/details/:name" component={Details} />
		<Route path="/cart" component={Cart} />
		<Route path="/shop" component={Shop} />
		<Route path="/thank-you" component="ThankYou"
	</Switch>
)
