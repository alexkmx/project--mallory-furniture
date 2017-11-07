import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <nav>
        
        <hr/>
        <Link to="/">Home</Link>
        <Link to="/">About</Link>
        <Link to="/terms">Terms</Link>
        <Link to="/all-products">AllProducts</Link>
        <Link to="/product/{product-id}">Product</Link>
        <Link to="/category/{category-type}">Category</Link>
      </nav>
    )
  }
}

export default Nav;
