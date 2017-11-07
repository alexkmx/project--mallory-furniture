import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Footer extends Component {
  render() {
    return(
      <div className="footer-container">
        <span className="footer-menu1">
          <p className="red-word">Company</p>
          <Link to="/">About</Link>
          <Link to="/">Press</Link>
          <Link to="/terms">Terms + Conditions</Link>
        </span>
        <span className="footer-menu1">
          <p className="red-word"></p>
          <p></p>
          <p></p>
          <p></p>
        </span>
        <span className="footer-menu1">
          <p className="red-word">Category</p>
          <Link to="/category/seating">Seating</Link>
          <Link to="/category/tables">Table</Link>
          <Link to="/category/desks">Desks</Link>
          <Link to="/category/storage">Storage</Link>
          <Link to="/category/bedroom">Bedroom</Link>
          <Link to="/category/miscellaneous">Misc</Link>
        </span>
        <span className="footer-menu1">
          <p className="red-word"></p>
          <p></p>
          <p></p>
          <p></p>
        </span>
        <span className="footer-menu1">
          <p className="red-word"></p>
          <p></p>
          <p></p>
          <p></p>
        </span>
        <span className="footer-menu1">
          <p className="red-word"></p>
          <p></p>
          <p></p>
          <p></p>
        </span>
        <span className="footer-menu1">
          <p className="red-word">Social</p>
            <section className="media-icons">
              <Link to="/" className="fa fa-instagram"></Link>
              <Link to="/" className="fa fa-twitter"></Link>
              <Link to="/" className="fa fa-pinterest"></Link>
            </section>
        </span>
      </div>

    )
  }
}

export default Footer;
