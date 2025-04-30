import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const ProductDetails = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  const data = useLoaderData();
  const allProduct = data.data.data;

  const { unique_id, name, image, price, short_desc, discount_amount } =
    product;
  const mainPrice = price - parseInt(discount_amount);

  useEffect(() => {
    const singleProduct = allProduct.find(
      (details) => details.id.toString() === id
    );
    setProduct(singleProduct);
  }, []);

  // console.log(id);
  console.log(product);
  return (
    <div>
      <div>
        <h1 className="lg:text-3xl text-center font-bold my-3">{product.name} Details</h1>
      </div>
      <div className="flex justify-center">
      <div className="card bg-base-100 w-sm md:w-md lg:w-lg shadow-sm">
        <figure>
          <img className="h-96 w-full"
            src={`https://admin.refabry.com/storage/product/${image}`}
            alt={name}
          />
        </figure>
        <div className="card-body">
        <h2 className="card-title">{name}</h2>
          <p>Price: <span className="line-through">{price}TK</span> <span>{mainPrice}TK</span></p>
          <p>Discount: {discount_amount}TK</p>
          <p>
           {short_desc}
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default ProductDetails;
