import React from 'react';

function Search() {
  return (
    <div className="search">
      <form action="#" className="form">
        <input
          type="text"
          className="stext"
          placeholder="serch by company "
        />
        <button type="button" className="sbtn">
          search
        </button>
      </form>
    </div>
  );
}

export default Search;
