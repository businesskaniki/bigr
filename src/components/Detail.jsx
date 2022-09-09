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
    price, image_link, website_link, rating, category,
    product_type, description, created_at, updated_at,
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
        <p className="nm">{name}</p>
        { !price || <p className="name">{`price in usd: ${price}$`}</p>}
        { !website_link || <p className="name">{`for more information follow this link ${website_link}`}</p>}
        { !rating || <p className="name">{`rated at ${rating} stars`}</p>}
        { !category || <p className="name">{` put under the category  ${category}`}</p>}
        { !product_type || <p className="name">{`product type ${product_type}`}</p>}
        { !created_at || <p className="name">{`posted on this foroum at: ${created_at}`}</p>}
        { !updated_at || <p className="name">{`updated on:  ${updated_at}`}</p>}
        { !description || <p className="desc">{`${description}`}</p>}
      </div>
    </div>
  );
}

export default Detail;
