import React, { useState } from "react";
import { useParams } from "react-router-dom";
import List from "../../components/List/List";
// import useFetch from "../../hooks/useFetch";
import "./Products.scss";

const Products = () => {
  const catId = parseInt(useParams().id);
  console.log(catId);

  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(null);
  // const [selectedSubCats, setSelectedSubCats] = useState([]);

  // const { data, loading, error } = useFetch(
  //   `/sub-categories?[filters][categories][id][$eq]=${catId}`
  // );

  // const handleChange = (e) => {
  //   const value = e.target.value;
  //   const isChecked = e.target.checked;
  //   setSelectedSubCats(
  //     isChecked
  //       ? [...selectedSubCats, value]
  //       : selectedSubCats.filter((item) => item !== value)
  //   );
  // };
  // console.log(selectedSubCats);

  return (
    <div className="products">
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>

          <div className="inputItem">
            <input type="checkbox" id="1" value="1" />
            <label htmlFor="1">Shoes</label>
          </div>
        </div>
        <div className="filterItem">
          <h2>Filter by price</h2>
          <div className="inputItem">
            <span>0</span>
            <input
              type="range"
              min={0}
              max={1000}
              onChange={(e) => {
                setMaxPrice(e.target.value);
              }}
            />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItem">
          <h2>Sory by</h2>
          <div className="inputItem">
            <input
              type="radio"
              id="asc"
              value="asc"
              name="price"
              onChange={(e) => setSort("asc")}
            />
            <label htmlFor="asc"> Price (Lowest first) </label>
          </div>
          <div className="inputItem">
            <input
              type="radio"
              id="desc"
              value="desc"
              name="price"
              onChange={(e) => setSort("desc")}
            />
            <label htmlFor="desc"> Price (Highest first) </label>
          </div>
        </div>
      </div>
      <div className="right">
        <img
          src="https://images.pexels.com/photos/5865384/pexels-photo-5865384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="catImg"
        />
        <List catId={catId} maxPrice={maxPrice} sort={sort} />
      </div>
    </div>
  );
};

export default Products;
