import React from 'react';
import { Produk, categories } from '../data';

const Product = () => {
  return (
    <>
      <div className="product">
        <div className="container">
          <div className="row">
            <div className="title">
              <h4>
                Showing results for <span>Fonts</span>
              </h4>
              <button type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                Filters
              </button>
            </div>
          </div>
          <div className="row mb-5">
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
            {Produk?.Graphics?.map((p) => (
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
          <div className="row" style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="col-md-12">
              <div aria-label="Page navigation example" style={{ display: 'flex', justifyContent: 'center' }}>
                <ul className="pagination">
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Previous">
                      <span aria-hidden="true">«</span>
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Next">
                      <span aria-hidden="true">»</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasRightLabel">
              Logo
            </h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
          </div>
          <div className="offcanvas-body">
            <div className="filters">
              <label htmlFor="">Categories</label>
              <select name="" id="">
                {categories?.map((c) => (
                  <option key={c} value={c.slug}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="filters">
              <label htmlFor="">Sub Categories</label>
              <select name="" id="">
                {categories?.map((c) => (
                  <option key={c} value={c.slug}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
