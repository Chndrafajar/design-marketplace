import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

const JoinShop = () => {
  return (
    <>
      <div className="joinShop">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2>Join With Us</h2>
              <p>Sell your digital product designs and reach millions of buyers or promote let's be a part of us.</p>
              <span>
                Start Open a Shop <FiArrowRight />
              </span>
            </div>
            <div className="col-md-6">
              <img src="/images/Group 8.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JoinShop;
