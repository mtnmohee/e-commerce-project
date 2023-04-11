import React, { useState } from "react";
import "./Product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import { useParams } from "react-router-dom";
// import useFetch from "../../hooks/useFetch";
// import { useDispatch } from "react-redux";
// import { addToCart } from "../../redux/cartReducer";

const Product = () => {
  const images = [
    "https://images.pexels.com/photos/1808283/pexels-photo-1808283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1843863/pexels-photo-1843863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];

  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);
  // const dispatch = useDispatch();

  const id = useParams().id;

  // const { data, loading, error } = useFetch(`/products/${id}?populate=*`);

  return (
    <div className="product">
      <>
        <div className="left">
          <div className="images">
            <img src={images[0]} alt="" onClick={(e) => setSelectedImg(0)} />
            <img src={images[1]} alt="" onClick={(e) => setSelectedImg(1)} />
          </div>
          <div className="mainImg">
            <img src={images[selectedImg]} alt="" />
          </div>
        </div>
        <div className="right">
          <h1>T-shirt</h1>
          <span className="price">$150</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            aperiam recusandae dicta nemo quam reprehenderit mollitia. Id velit
            quis nam neque sequi cupiditate tempore, culpa vero libero sapiente
            quibusdam earum?
          </p>
          <div className="quantity">
            <button
              onClick={() =>
                setQuantity((prev) => (prev === 1 ? 1 : quantity - 1))
              }
            >
              -
            </button>
            {quantity}
            <button onClick={() => setQuantity((prev) => quantity + 1)}>
              +
            </button>
          </div>
          <button className="add">
            <AddShoppingCartIcon /> ADD TO CART
          </button>
          <div className="links">
            <div className="item">
              <FavoriteBorderIcon /> ADD TO WISH LIST
            </div>
            <div className="item">
              <BalanceIcon /> ADD TO COMPARE
            </div>
          </div>
          <div className="info">
            <span> Vendor: Polo</span>
            <span>Product Type: T-Shirt </span>
            <span>Tag: T-Shirt , Women, Top</span>
          </div>
          <hr />
          <div className="info">
            <span>DESCRIPTION</span>
            <hr />
            <span>ADDITIONAL INFORMATION</span>
            <hr />
            <span>FAQ</span>
          </div>
        </div>
      </>
    </div>
  );
};

export default Product;
