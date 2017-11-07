import React, {Component} from 'react';
import request from 'superagent';
import {Link} from 'react-router-dom';

class ItemsContainer extends Component {
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

    function getAllItems(AllItems) {
      return(

        <div className="extract-just">
          <Link to=""><img src={AllItems.imageLink} alt="logo" /></Link>
          <p>{AllItems.item}</p>
          <small>${AllItems.price}</small>
        </div>
      )
    }

    let displayItems = this.state.items.map(getAllItems)


      return(

        <div  className="items-container">
          {displayItems}
        </div>
      )
    }
  }

export default ItemsContainer;
