import React, { useEffect } from 'react';
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import Home from './../home/Home.js';
import About from './../About.js';
import Cart from './../Cart.js';
import CartCount from './../CartCount.js';

function Header() {
	var arr = localStorage.getItem('myCart') ? JSON.parse(localStorage.getItem('myCart')) : [];
	useEffect(() => {
		document.getElementById('cnt').innerHTML = arr.length;
	});	
	// function mySubmitHandler(e) {
	// 	e.preventDefault();
	// 	var getVal = e.target[0].value;
	// 	console.log(getVal);
	// }
    return(
		<Router>
			<nav>
				<ul>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/about">About</Link></li>
					<li><Link to="/cart">Cart <span id="cnt"><CartCount /></span></Link></li>
				</ul>
			</nav>
			{/* <div className="search-form clearfix">
				<form onSubmit={mySubmitHandler} id="searchform">
					<input type="text" name="s" id="s" className="srchTxt" placeholder="What are you looking for " />
					<input className="srchBtn" type="submit" value="Submit" />
				</form>
			</div> */}
			<Switch>
				<Route path="/about" component={About} />
				<Route path="/cart" component={Cart} />
				<Route path="/" component={Home} />
			</Switch>
		</Router>
    )
}

export default Header;