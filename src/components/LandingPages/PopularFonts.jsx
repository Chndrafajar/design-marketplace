import React from 'react';
import { Produk } from '../../data';
import { FiChevronRight } from 'react-icons/fi';

const PopularFonts = () => {
  return (
    <div className="Popular">
      <div className="container">
        <div className="row">
          <div className="title">
            <h2>Fonts</h2>

            <span>
              Explore Fonts <FiChevronRight />
            </span>
          </div>

          {Produk?.Fonts?.map((p) => (
            <div className="col-sm-6 col-lg-3 col-12" key={p.id}>
              <div className="card">
                <div className="items">
                  <img src={p.img} alt="" />
                  <img src={p.imgToko} alt="" className="profil" />
                </div>
                <div className="info">
                  <h5>{p.name}</h5>
                  <button>${p.price}</button>
                </div>
                <span>
                  by <b>{p.nameToko}</b> in <b>{p.categories}</b>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularFonts;
