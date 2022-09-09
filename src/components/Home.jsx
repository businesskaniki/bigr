import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { getmakeup } from '../redux/Makeup';
import { getdetail } from '../redux/Makeupdetail';
import Search from './Search';

function Home() {
  const makeups = useSelector((state) => state.makeup);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getmakeup());
  }, [dispatch]);

  const detail = (e) => {
    const url = e.target.farthestViewportElement.id;
    dispatch(getdetail(url));
  };

  return (
    <>
      <Search />
      <div className="grid">
        {makeups.map((makeup) => (
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
