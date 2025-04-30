import React, { useEffect, useState } from "react";
import Items from "./Items";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // fetch(`https://admin.refabry.com/api/all/product/get`)
    //   .then((res) => res.json())
    //   .then((data) => setProducts(data.data.data));

    try{
        axios.get(`https://admin.refabry.com/api/all/product/get`)
        .then(data => setProducts(data.data.data.data))
    }
    catch(e){
        console.log(e)
    }
    finally{
        setLoading(false)
    }

        
  }, []);

//   console.log(products);

if(loading) return <div className="text-center py-10 text-3xl font-bold">loading.....</div>

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
