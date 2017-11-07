import React, {Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import logo from '../images/mf-logo-black.svg';

class Product extends Component {
  render() {
    return(
      <div>
        <Header />
        <div className="logo-bottom">
          <img className="logo" src={logo} alt='logo'/>
          <hr />
        </div>
        <Footer />
      </div>
    )
  }
}

export default Product;
