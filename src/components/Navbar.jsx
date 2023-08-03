import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Categories from '../Json/categories.json';
import { categories } from '../data';
import { AiOutlineHeart } from 'react-icons/ai';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { GoPerson } from 'react-icons/go';
import { BiSearch } from 'react-icons/bi';

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  const { pathname } = useLocation();

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', isActive);
    return () => {
      window.removeEventListener('scroll', isActive);
    };
  }, []);

  // const currentUser = null

  const currentUser = {
    id: 1,
    username: 'Anna',
    isSeller: true,
  };

  return (
    <>
      <div className={active || pathname !== '/' ? 'navbar active' : 'navbar'}>
        <div className="container">
          <div className="logo">
            <Link className="link" to="/">
              <span className="text">Logo</span>
            </Link>
          </div>
          <div className="search">
            <div className="searchInput">
              <input type="text" placeholder="Search milion a fonts , graphics more" />

              <BiSearch />
            </div>
          </div>

          <div className="links">
            <div className="menu">
              <img src="/icons/heart.svg" alt="" />
            </div>
            <div className="menu border-menu">
              <img src="/icons/bag-2.svg" alt="" />
            </div>
            <div className="menu ">
              <NavLink className="link" to="login">
                <img src="/icons/user.svg" alt="" />
              </NavLink>
            </div>
          </div>
          <div className="menubars" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">
            <img src="/icons/bar.svg" alt="" />
          </div>
        </div>
        {(active || pathname !== '/') && (
          <>
            <hr />
            <div className="menu">
              <div className="container">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  {categories.map((c) => (
                    <li className="nav-item">
                      <NavLink className="nav-link">{c.name}</NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <hr />
          </>
        )}
      </div>

      <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabIndex={-1} id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasScrollingLabel">
            Logo
          </h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
        </div>
        <div className="offcanvas-body">
          <ul className="list-group">
            {categories?.map((c) => (
              <li key={c.id} className="list-group-item">
                {c.name}
              </li>
            ))}
          </ul>
          <div className="searchInput" style={{ padding: 15 }}>
            <input type="text" placeholder="Search milion fonts, graphics" />
            <BiSearch />
          </div>
          <div className="menuNavbar" style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
            <div className="menu">
              <img src="/icons/heart.svg" alt="" />
            </div>
            <div className="menu border-menu">
              <img src="/icons/bag-2.svg" alt="" />
            </div>
            <div className="menu ">
              <img src="/icons/user.svg" alt="" />
            </div>
          </div>
        </div>
      </div>

      <nav className="mobile">
        <ul>
          <li>
            <img src="/icons/house.svg" alt="" />
          </li>

          <li>
            <img src="/icons/heart.svg" alt="" />
          </li>
          <li>
            <img src="/icons/search-black.svg" alt="" />
          </li>
          <li>
            <img src="/icons/bag-2.svg" alt="" />
          </li>
          <li>
            <img src="/icons/user.svg" alt="" />
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
