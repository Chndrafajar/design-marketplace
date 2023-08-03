import React from 'react';
import { BiSearch } from 'react-icons/bi';
import { LandingPage } from '../../data';

const HeroSection = () => {
  return (
    <div className="heroSection">
      <div className="container ">
        <div className="row">
          <div className="col-md-5">
            <img src={LandingPage.imgHero.url} alt="" />
          </div>
          <div className="col-md-7">
            <h1>{LandingPage.titleHero.name}</h1>
            <div className="heroSearchInput">
              <input type="text" placeholder="Search milion a fonts , graphics more" />
              <BiSearch />
            </div>
            <div className="menuCategories">
              {LandingPage.categories?.map((c) => (
                <button key={c.id}>{c.name}</button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
