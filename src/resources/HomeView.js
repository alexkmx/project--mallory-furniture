import React, {Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import imgheadhom from '../images/landing-splash-bg.png';
import logo from '../images/mf-logo-black.svg';
import request from 'superagent';



class HomeView extends Component {
  componentWillMount() {
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
      items: []
    };
  }

  render() {

    function extractJustSeating(seatingItem) {

      return(
        <div className="extract-just">
          <img src={seatingItem.imageLink} alt="logo" />
          <p>{seatingItem.item}</p>
          <small>${seatingItem.price}</small>
        </div>
      )
    }

    let displaySeatingItem = this.state.items.map(extractJustSeating)

    return(

      <div className="home-view">
        <Header />
        <div className="sub-header">
          <img src={imgheadhom} alt='logo'/>
            <span className="title">
              <h1>Mallory Furniture</h1>
              <h4>Your furniture is old.</h4>
              <h4>Ours is older.</h4>
            </span>
        </div>
        <div className="sub-title-hom">
          <h2>Featured products</h2>
          <h4>Check out some of our favorite listings</h4>
        </div>
        <div className="body-container">
          <div className="items-container">
            {displaySeatingItem[0]}
            {displaySeatingItem[1]}
            {displaySeatingItem[2]}
            {displaySeatingItem[3]}
            {displaySeatingItem[4]}
            {displaySeatingItem[5]}
          </div>
        </div>
        <div>

        </div>
        <div className="sub-title-hom">
          <h2>Browse by Categories</h2>
          <h4>Explore by furniture type.</h4>
        </div>
        <div className="buttons-bottom">
          <p></p>
          <p></p>
        </div>
        <div className="logo-bottom">
          <img className="logo" src={logo} alt='logo'/>
        </div>
        <Footer />
      </div>
    )
  }
}

export default HomeView;
