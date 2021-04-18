import React from 'react';
import { Link } from 'react-router-dom';



function Footer() {
    return (
        <footer className="site-footer" style={{backgroundColor: '#76b852', borderBottom: '0px'}}>
        <div className="container">
          <div className="row">
            <div className="col-4 col-sm-2  text-nowrap">
              <h4>Links</h4>
              <ul className="list-unstyled">
                <li><a className="text-danger text-uppercase" href="#">Home</a></li>
                <li><a className="text-danger text-uppercase" href="shop.html">Shop</a></li>
                <li><a className="text-danger text-uppercase" href="growinginfo.html">Growing Info</a></li>
              </ul>
            </div>
            <div className="col-sm-10 text-right">
              <h5>Contact Us</h5>
              <a className="text-danger text-uppercase" role="button" href="tel:+12065551234"><span className="fa phone-rotary" />
                1-555-777-9311</a><br />
              <a className="text-danger text-uppercase" role="button" href="mailto:info@growbigshop.com"><span className="fa fa-envelope-o" />
                info@growbigshop.com</a>
            </div>
          </div>
        </div></footer>
    );
  }

  export default Footer;