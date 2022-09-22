import React from "react";

const Categorias = ({ filtrarItems, categorias }) => {
	/*
  MANUAL-HARDCODING
  <button className='filter-btn' onClick={() => filtrarItems("breakfast")}>
    Breakfast
  </button>
  <button className='filter-btn' onClick={() => filtrarItems("lunch")}>
    Lunch
  </button>
  <button className='filter-btn' onClick={() => filtrarItems("shakes")}>
    Shakes
  </button>
  <button className='filter-btn' onClick={() => filtrarItems("all")}>
    All
  </button>
  */

	//MANERA ACTUAL, MANERA DINAMICA
  return (
    <div className="btn-container">
      {categorias.map((category, index) => {
        return (
          <button
            type="button"
            className="filter-btn"
            key={index}
            onClick={() => filtrarItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categorias;
