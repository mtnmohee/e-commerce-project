import React from "react";
import "./Cart.scss";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
// import { useSelector, useDispatch } from "react-redux";
// import { removeItem, resetCart } from "../../redux/cartReducer";
// import { loadStripe } from "@stripe/stripe-js";
// import { makeRequest } from "../../makeRequest";

const Cart = () => {
  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=600",
      img2: "https://images.pexels.com/photos/975006/pexels-photo-975006.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: " T-shirt",
      isNew: true,
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia, non. Omnis earum odit ab ducimus! Perspiciatis necessitatibus reprehenderit fugiat sequi nemo, sit, vitae dolor doloribus, totam cum accusamus rerum tempora!",
      oldPrice: 130,
      price: 100,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://images.pexels.com/photos/975006/pexels-photo-975006.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Coat",
      isNew: false,
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia, non. Omnis earum odit ab ducimus! Perspiciatis necessitatibus reprehenderit fugiat sequi nemo, sit, vitae dolor doloribus, totam cum accusamus rerum tempora!",
      oldPrice: 200,
      price: 150,
    },
  ];
  //   const products = useSelector((state) => state.cart.products);

  //   const dispatch = useDispatch();

  //   const totalPrice = () => {
  //     let total = 0;
  //     products.forEach((item) => (total += item.quantity * item.price));

  //     return total.toFixed(2);
  //   };

  //   const stripePromise = loadStripe(
  //     "pk_test_51MnpyNIHkXEtd9MtcCPITxYPTdwDufBjeTs7u9gmv9Z4aDH3tfgTVPbyWA9CojaZM032uBgYsx9Zru49QZ5Osyx200J8JeJpNU"
  //   );
  //   const handlePayment = async () => {
  //     try {
  //       const stripe = await stripePromise;
  //       const res = await makeRequest.post("/orders", {
  //         products,
  //       });

  //       await stripe.redirectToCheckout({ sessionId: res.data.stripeSession.id });
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  return (
    <div className="cart">
      <h1>Products in your cart</h1>

      {data?.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 100)} ....</p>
            <div className="price">1 X {item.price}</div>
          </div>
          <DeleteOutlinedIcon className="delete" />
        </div>
      ))}

      <div className="total">
        <span>SUBTOTAL</span>
        <span>$200</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className="reset">Reset Cart</span>
    </div>
  );
};

export default Cart;
