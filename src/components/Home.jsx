import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { getmakeup } from '../redux/Makeup';
import { getdetail } from '../redux/Makeupdetail';

function Home() {
  const makeups = useSelector((state) => state.makeup);
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    if (makeups.length === 0) {
      dispatch(getmakeup());
    }
  }, [dispatch]);

  const Search = (e) => {
    const val = e.target.value.trim().toLowerCase();
    setSearch(val);
  };

  const serchedmakeup = makeups.filter((makeup) => makeup.name
    .trim().toLowerCase().includes(search));

  const detail = (e) => {
    const url = e.target.farthestViewportElement.id;
    dispatch(getdetail(url));
  };

  return (
    <>
      <div className="search">
        <h2>kings and queens collection makeup kenya</h2>
        <form action="#" className="form">
          <input
            value={search}
            type="text"
            className="stext"
            placeholder="serch by company "
            onChange={Search}
          />
          <button type="button" className="sbtn">
            search
          </button>
        </form>
      </div>
      <div className="grid" role="list">
        {serchedmakeup.map((makeup) => (
          <div key={Math.random()} className="contaier">
            <div
              key={makeup.id}
              className="item"
              style={{
                backgroundImage: `url(${makeup.image_link})`,
              }}
            >
              <NavLink to="/Detail" id={makeup.product_api_url} key={Math.random()} onClick={detail}>
                <BsFillArrowRightCircleFill
                  className="btn"
                  id={makeup.product_api_url}
                  to="/Detail"
                  onClick={detail}
                />
              </NavLink>
            </div>
            <div className="title" key={Math.random()}>
              <p>{makeup.name}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
