import React, {Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import logo from '../images/mf-logo-black.svg';
import ItemsContainer from './ItemsContainer';
import request from 'superagent';

class AllProducts extends Component {
  componentWillMount() {
    request
    .get('https://mallory-furniture-admin.now.sh/api/v1/products')
    .then(data => {

      this.state({
        items:data.body,
        count: 0
      })
    })
  }

  constructor() {
    super();

    this.state = {
      items: [],
      count: 0
    };

  }

  componentDidMount() {
    this.setState({
      count: this.state.items.legth
    })
  }

    render() {


      return(
      <div>
        <Header />
        <div className="body-container-cat">
        <div className="sub-title-hom">
          <h2>All Products</h2>
          <h4>all available listings</h4>
        </div>
        
          <div className='button-container'>

        </div>

        <div className="body">
          <ItemsContainer />
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

export default AllProducts;
