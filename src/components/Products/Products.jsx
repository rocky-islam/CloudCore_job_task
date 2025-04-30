import React, { useEffect, useState } from "react";
import Items from "./Items";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // fetch(`https://admin.refabry.com/api/all/product/get`)
    //   .then((res) => res.json())
    //   .then((data) => setProducts(data.data.data));

        axios.get(`https://admin.refabry.com/api/all/product/get`)
        .then(data => setProducts(data.data.data.data))
  }, []);

//   console.log(products);

  return (
    <div>
      <div>
        <h1 className="text-2xl md:text-6xl text-center font-bold my-5">Our Products</h1>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-20 mb-20 lg:px-12">
        {products.map((item) => (
          <Items key={item.unique_id} item={item}></Items>
        ))}
      </div>
    </div>
  );
};

export default Products;
