import React, {Component} from 'react';
import logo from '../images/mf-logo-white.svg';
import {Link} from 'react-router-dom';
export default class Header extends Component {

    render() {
    return (

      <div className="header-container">
      <img className="logo" src={logo} alt='logo'/>
      <section className="section1">
        <ul className="left-menu">
          <Link to="/">About</Link>
          <Link to="/terms" className="tc">Terms + Conditions</Link>
          <Link to="/all-products" className="all">All</Link>
        </ul>
      </section>
      <section className="section2">
        <ul className="center-menu">
          <Link to="/category/seating">Seating</Link>
          <Link to="/category/tables">Tables</Link>
          <Link to="/category/desks">Desks</Link>
          <Link to="/category/storage">Storage</Link>
          <Link to="/category/bedroom">Bedroom</Link>
          <Link to="/category/miscellaneous" className="tc">Misc</Link>
          <p></p>
        </ul>
      </section>
      <Link to="#/" className="fa fa-cart-arrow-down"></Link>


    </div>

    )
  }
}
