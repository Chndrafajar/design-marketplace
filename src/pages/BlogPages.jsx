import React from 'react';
import { Blogs, categories } from '../data';

const BlogPages = () => {
  return (
    <div className="blogs">
      <h1>Blogs</h1>
      <hr />
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="items">
              <ul className="list-group">
                <h5>Contents</h5>
                {Blogs.menuContents?.map((c) => (
                  <li key={c.id} className="list-group-item">
                    {c.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-lg-9">
            <h2>{Blogs.blogsContents.title}</h2>
            <span className="date">{Blogs.blogsContents.date}</span>
            <img src={Blogs.blogsContents.img} alt="" />
            <p>{Blogs.blogsContents.p}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPages;
