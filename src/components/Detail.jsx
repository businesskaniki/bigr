/* eslint-disable camelcase */
import React from 'react';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Detail() {
  const makeups = useSelector((state) => state.makeupdetail);
  const {
    brand,
    name,
    price, image_link, product_link, website_link, rating, category,
    product_type, tag_list, created_at, updated_at,
  } = makeups;
  return (
    <div className="detailcontainer">
      <h2>
        {' '}
        <span>
          <NavLink to="/">
            <BsFillArrowLeftCircleFill className="navigation" />
          </NavLink>
          {' '}
        </span>
        {brand}
      </h2>
      <div
        style={{
          // eslint-disable-next-line camelcase
          backgroundImage: `url(${image_link})`,
        }}
        className="detail"
      />
      <div>
        <p className="name">{name}</p>
        <small className="name">{price}</small>
        <p className="name">{product_link}</p>
        <p className="name">{website_link}</p>
        <p className="name">{rating}</p>
        <p className="name">
          {category}

        </p>
        <p className="name">{product_type}</p>
        <p className="name">{tag_list}</p>
        <p className="name">{created_at}</p>
        <p className="name">{updated_at}</p>

      </div>
    </div>
  );
}

export default Detail;
