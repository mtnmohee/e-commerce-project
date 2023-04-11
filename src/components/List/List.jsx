import React from "react";
// import useFetch from "../../hooks/useFetch";
import Card from "../Card/Card";
import "./List.scss";

const List = () => {
  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=600",
      img2: "https://images.pexels.com/photos/975006/pexels-photo-975006.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: " T-shirt",
      isNew: true,
      oldPrice: 130,
      price: 100,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://images.pexels.com/photos/975006/pexels-photo-975006.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Coat",
      isNew: false,
      oldPrice: 200,
      price: 150,
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/2058664/pexels-photo-2058664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://images.pexels.com/photos/975006/pexels-photo-975006.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Skirt",
      isNew: true,
      oldPrice: 70,
      price: 50,
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/1808283/pexels-photo-1808283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://images.pexels.com/photos/975006/pexels-photo-975006.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Hat",
      isNew: false,
      oldPrice: 19,
      price: 12,
    },
  ];

  // const { data, loading, error } = useFetch(
  //   `/products?populate=*&[filters][categories][id]=${catId}${subCats.map(
  //     (item) => `&[filters][sub_categories][id][$eq]=${item}`
  //   )}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
  // );

  return (
    <div className="list">
      {data?.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  );
};

export default List;
