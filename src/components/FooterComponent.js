import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-4 col-sm2-offset-1">
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li><Link to='/home'>Home</Link></li>
              <li><Link to='/directory'>Directory</Link></li>
              <li><Link to='/aboutus'>About</Link></li>
              <li><Link to='/contactus'>Contact</Link></li>
            </ul>
          </div>
          <div className="col-6 col-sm-3 text-center">
            <h5>Social</h5>
            <a href="http://instagram.com" className="btn btn-social-icon btn-instagram"><i className="fa fa-instagram"></i></a>{' '}
            <a href="http://facebook.com" className="btn btn-social-icon btn-facebook"><i className="fa fa-facebook"></i></a>{' '}
            <a href="http://twitter.com" className="btn btn-social-icon btn-twitter"><i className="fa fa-twitter"></i></a>{' '}
            <a href="http://youtube.com" className="btn btn-social-icon btn-google"><i className="fa fa-youtube"></i></a>
          </div>
          <div className="col-sm-4 text-center">
            <a href="tel:+12065551234" className="btn btn-link" role="button"><i className="fa fa-phone" /> 1-206-555-1234</a><br />
            <a href="mailto:notreal@notreal.co" className="btn-btn-link" role="button"><i className="fa fa-envelope-o" /> campsites@nucamp.co</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;