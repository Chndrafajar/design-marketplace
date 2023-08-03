import React from 'react';
import { LandingPage } from '../../data';

const TrendingCategories = () => {
  return (
    <>
      <div className="TrendingCategories">
        <div className="container">
          <div className="row">
            <h2>Categories</h2>
            {LandingPage?.categoriesTrending?.map((ct) => (
              <div className="col-md-6 col-lg-3 col-6" key={ct.id}>
                <div className="card">
                  <img src={ct.img} alt={ct.name} />
                  <span>{ct.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TrendingCategories;
