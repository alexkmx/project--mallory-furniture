import React, {Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import imgheadcat from '../images/category-seating.png';
import logo from '../images/mf-logo-black.svg';

class Category extends Component {
  render() {
    return(
      <div className="category-container">
       <Header />
        <div className="body-container-cat">
        <div className="sub-header-cat">
          <img src={imgheadcat} alt='logo'/>
        </div>
        <div className="sub-title-hom">
          <h2>Seating</h2>
          <h4>All seating products</h4>
        </div>
        <div className="body">


        </div>
        <div className="logo-bottom">
          <img className="logo" src={logo} alt='logo'/>
          <hr />
        </div>
        <Footer />
        </div>
      </div>
    )
  }
}

export default Category;
