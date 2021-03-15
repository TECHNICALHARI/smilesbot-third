import React, { useState } from "react";
import "./Home.css";
import Product from "./Product";
import data from "./product_list.json";

function Home() {
  const[productData, setProductData] = useState(data)
  return (
    <div className="home">
      <div className="home_container">
        <div className="home_row">
          <Product
            id="123456"
            title="The Lean Startup: How Today's Entrepreneurs ."
            price={29.99}
            image="https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UY218_.jpg"
            rating={5}
          />
          <Product
            id="123456"
            title="Very Good Headphones"
            price={24.99}
            image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZHVjdHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
            rating={4}
          />
          <Product
          id="123457"
            title="TP-Link AC1750 Smart WiFi Router (Archer A7) "
            price={56.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51R2a9p-vNL._AC_SL1000_.jpg"
            rating={4}
          />
        </div>
        <div className="home_row">
          <Product
          id="123458"
            title="New Apple iPhone 12 Pro (512GB, Pacific Blue)"
            price={2400}
            image="https://m.media-amazon.com/images/I/71DVgBTdyLL._FMwebp__.jpg"
            rating={5}
          />
          <Product
          id="123459"
          title="Swift Home Premium Bedding Set "
          price={54.99}
          image="https://images-na.ssl-images-amazon.com/images/I/91gOlsTEFlL._AC_SL1500_.jpg"
          rating={4}
           />
          <Product
          id="1234510"
          title="Crayola Colored Pencils, Adult Coloring,"
          price={10}
          image="https://images-na.ssl-images-amazon.com/images/I/71PVidNCWdL._AC_SL1500_.jpg"
          rating={3}
           />
        </div>
        <div className="home_row">
          <Product
          title="New Apple MacBook Pro (16-inch, 16GB RAM, 512GB Storage) - Space Gray"
          price={2199}
          image="https://images-na.ssl-images-amazon.com/images/I/71pC69I3lzL._AC_SL1500_.jpg"
          rating={5}
           />
           <Product
          title="Best Camera for photo"
          price={299}
          image="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          rating={5}
           />
        </div>
        <div className="home_row">
           <Product
          title="The mix is considered consistent if the products in all the product lines are similar."
          price={299}
          image="https://cdn.corporatefinanceinstitute.com/assets/product-mix3.jpeg"
          rating={5}
           />
        </div>
      </div>
    </div>
  );
}

export default Home;
