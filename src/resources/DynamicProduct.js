import React, {Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import logo from '../images/mf-logo-black.svg';
import request from 'superagent';
import tables from '../images/category-tables.png';

class DynamicView extends Component {
  componentWillMount = () => {
    request
    .get('https://mallory-furniture-admin.now.sh/api/v1/products')
    .then(data => {

      this.setState({
        items:data.body
      })
    })
  }

  constructor() {
    super();

    this.state = {
      items:[]
    };
  }

    render() {
      const categories = this.props.match.params.id;



      return(

      <div className="category-container">
        <Header />
        <div className="sub-header-cat">
        <img src={tables} alt="foto" />
        </div>
        <div  className="items-container">

        </div>
        <div className="logo-bottom">
          <img className="logo" src={logo} alt='logo'/>
        </div>
        <Footer />
      </div>
    );
  }
}

export default DynamicView;
