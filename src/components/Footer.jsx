import React from 'react';

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <h1>Logo</h1>
            <p>sell your designs worldwide and reach millions of buyers</p>
            <div className="sosialIcons">
              <img src="/icons/ig.svg" alt="" />
              <img src="/icons/facebook.svg" alt="" />
              <img src="/icons/linkedin.svg" alt="" />
              <img src="/icons/twitter.svg" alt="" />
              <img src="/icons/pinterest.svg" alt="" />
            </div>
          </div>
          <div className="col-lg-2">
            <h2>CATEGORIES</h2>
            <div className="menu">
              <span>Fonts</span>
              <span>Graphics</span>
              <span>Templates</span>
              <span>Illustrations</span>
              <span>Add On</span>
            </div>
          </div>
          <div className="col-lg-2">
            <h2>COMPANY</h2>
            <div className="menu">
              <span>About</span>
              <span>Brand</span>
              <span>Privacy Policy</span>
              <span>Careers</span>
            </div>
          </div>
          <div className="col-lg-2">
            <h2>RESOURCE</h2>
            <div className="menu">
              <span>Open a Shop</span>
              <span>Join</span>
              <span>Premium</span>
            </div>
          </div>
          <div className="col-lg-2">
            <h2>CATEGORIES</h2>
            <div className="menu">
              <span>Help Center</span>
              <span>Blogs</span>
              <span>Contact</span>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="copyright">
        <h3>Copyright © 2023 Logo, a Dribbble company. All rights reserved.</h3>
      </div>
    </div>
  );
};

export default Footer;
