import React, { Component } from 'react';

class noMatch extends Component {
  render() {
    return(
      <div className="error">
        <section>
          <span className="nomatch">ERROR: 404</span>
        </section>
        <hr />
        <h5>This is not the page your are looking for</h5> 
      </div>
    )
  }
}

export default noMatch;
