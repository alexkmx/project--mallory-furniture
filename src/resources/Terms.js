import React, {Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import logo from '../images/mf-logo-black.svg';

class Terms extends Component {
  render() {
    return(
      <div>
        <Header />
        <div className="terms-container">
          <h1>Terms + Conditions</h1>
          <h5>Terms of Service</h5>
          <p>All buyers (hereinafter 'You' or 'User') need to register by creating a username and a password for login.

          The information you provide needs to be accurate. You may not use false information or impersonate another person or company through your account.

          You are responsible for maintaining the confidentiality of the login details and Your account. Artlimes reserves the right to reject Your subscription for any or no reason, in particular, due to Users breach of these Terms of Service.</p>
          <h5>Privacy Policy</h5>
          <p>User’s personal data handling and protection is governed under the terms hereof and the provisions of General Data Protection Regulation (Regulation EC/679/2016).

          We don’t share your personal information with anyone except to comply with the law, develop our products, or protect our rights.

          Mallory Furniture collects non-personally-identifying information of the sort that web browsers and servers typically make available, such as the browser type, language preference, referring site, and the date and time of each visitor request. Mallory Furniture's purpose in collecting non-personally identifying information is to better understand how Mallory Furniture's visitors use its website. From time to time, Mallory Furniture may release non-personally-identifying information in the aggregate, e.g., by publishing a report on trends in the usage of its website.

          Mallory Furniture may collect statistics about the behavior of visitors to its websites

          Certain visitors to Mallory Furnitures websites choose to interact with Mallory Furniture in ways that require Mallory Furniture to gather personally-identifying information. Mallory Furniture collects such information only insofar as is necessary or appropriate to fulfill the purpose of the visitor’s interaction with Mallory Furniture. Mallory Furniture does not disclose personally-identifying information other than as described below. And visitors can always refuse to supply personally-identifying information, with the caveat that it may prevent them from engaging in certain website-related activities.</p>
        </div>
        <div className="logo-bottom">
          <img className="logo" src={logo} alt="logo"/>
          <hr />
        </div>
        <Footer />
      </div>
    )
  }
}

export default Terms;
