import React from "react";
import { NavLink } from "react-router-dom";

const Items = ({ item }) => {
  const { id, unique_id, name, image, price, short_desc, discount_amount} = item;
  const mainPrice = price - parseInt(discount_amount);
  return (
    <div>
      <div className="card w-80 shadow-lg shadow-blue-500/50">
        <figure className="">
          <img className="w-full h-64 object-fill"
            src={`https://admin.refabry.com/storage/product/${image}`}
            alt={name}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>Price: <span className="line-through">{price}TK</span> <span>{mainPrice}TK</span></p>
          <p>Discount: {discount_amount}TK</p>
          <p>
           {short_desc.slice(0,55)}
          </p>
          <div className="card-actions justify-end">
            <NavLink to={`/productDetails/${id}`} className="btn btn-primary">show details</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Items;
