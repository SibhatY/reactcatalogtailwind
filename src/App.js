import "./App.css";
import logo from "./logo.png";
import React, { useState, useEffect } from "react";
import { Products } from "./Products";
import { Categories } from "./Categories";

export const App = () => {
  console.log("Step 1: After reading file :");

  const [ProductsCategory, setProductsCategory] = useState(Products);
  const [query, setQuery] = useState("");
  // var ProductsCategory = Products;
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  const checkoutButton = () => {
    if (cart.length > 0) {
      return (
        <button className="bg-blue-500 text-white rounded-md px-3 py-2 mt-3">
          Checkout
        </button>
      );
    } else {
      return null;
    }
  };

  const render_products = (ProductsCategory) => {
    return (
      <div className="category-section fixed">
        {console.log("Step 3 : in render_products ")}
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-600 category-title">
          Products ({ProductsCategory.length})
        </h2>

        <div
          className="m-6 p-3 mt-10 ml-0 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-6 xl:gap-x-10"
          style={{ maxHeight: "800px", overflowY: "scroll" }}
        >
          {/* Loop Products */}
          {ProductsCategory.map((product, index) => (
            <div key={index} className="group relative shadow-lg">
              <div className=" min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden lg:h-60 lg:aspect-none">
                <img
                  alt="player"
                  src={product.image}
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
              </div>
              <div className="flex justify-between p-3">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      <span style={{ fontSize: "16px", fontWeight: "600" }}>
                        {product.title}
                      </span>
                    </a>
                    <p>Tag - {product.category}</p>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Rating: {product.rating.rate}
                  </p>
                </div>
                <p className="text-sm font-medium text-green-600">
                  ${product.price}
                </p>
              </div>
              <div className="flex justify-between p-3">
                <button
                  className="bg-green-500 text-white rounded-l py-1 px-2"
                  style={{ zIndex: 10 }}
                  onClick={() => addToCart(product)}
                >
                  +
                </button>
                <span
                  className="border border-green-500 bg-white py-1 px-2"
                  style={{ zIndex: 10 }}
                >
                  {howManyofThis(product.id)}
                </span>
                <button
                  className="bg-red-500 text-white rounded-r py-1 px-2"
                  style={{ zIndex: 10 }}
                  onClick={() => removeFromCart(product)}
                >
                  -
                </button>
              </div>
            </div>
          ))}
        </div>
        <span style={{ position: 'absolute', right: 100}}>{checkoutButton()}{cartTotal}</span>
      </div>
    );
  };

  function handleClick(tag) {
    console.log("Step 4 : in handleClick", tag);
    let filtered = Products.filter((cat) => cat.category === tag);
    if (tag === "All") {
      setProductsCategory(Products);
    } else {
      setProductsCategory(filtered);
      // ProductsCategory = filtered;
      console.log("Step 5 : ", Products.length, ProductsCategory.length);
    }
  }

  const handleChange = (e) => {
    setQuery(e.target.value);
    const results = Products.filter((eachProduct) => {
      if (e.target.value === "") return true;
      return eachProduct.title
        .toLowerCase()
        .includes(e.target.value.toLowerCase());
    });
    setProductsCategory(results);
  };

  const addToCart = (el) => {
    setCart([...cart, el]);
  };

  const removeFromCart = (el) => {
    const index = cart.findIndex((item) => item.id === el.id);
    if (index !== -1) {
      const hardCopy = [...cart];
      hardCopy.splice(index, 1);
      setCart(hardCopy);
    }
  };

  function howManyofThis(id) {
    let hmot = cart.filter((cartItem) => cartItem.id === id);
    return hmot.length;
  }

  useEffect(() => {
    total();
  }, [cart]);

  const total = () => {
    let totalVal = 0;
    for (let i = 0; i < cart.length; i++) {
      totalVal += cart[i].price;
    }
    setCartTotal(totalVal);
  };

  const cartItems = cart.map((el) => (
    <div key={el.id}>
      <img class="img-fluid" src={el.image} width={30} />
      {el.title}${el.price}
    </div>
  ));

  return (
    <div className="flex fixed flex-row">
      {console.log(
        "Step 2 : Return App :",
        Products.length,
        ProductsCategory.length
      )}
      <div
        className="h-screen  bg-slate-800 p-3 xl:basis-1/5"
        style={{ minWidth: "65%" }}
      >
        <img className="w-full" src={logo} alt="Sunset in the mountains" />
        <div className="px-6 py-4">
          <h1 className="text-3xl mb-2 font-bold text-white"> Sports Cards </h1>
          <p className="text-gray-700 text-white">
            by - <b style={{ color: "orange" }}>Yaaseen and Sibhat</b>
          </p>
          <div className="py-10">
            {Categories ? <p className="text-white">Tags : </p> : ""}
            {Categories.map((tag) => (
              <button
                key={tag}
                className="inline-block bg-amber-600 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mt-2"
                onClick={() => {
                  handleClick(tag);
                }}
              >
                {tag}
              </button>
            ))}
          </div>
          <div className="py-10">
            <input type="search" value={query} onChange={handleChange} />
          </div>
        </div>
      </div>
      <div className="ml-5  p-10 xl:basis-4/5">
        {console.log(
          "Before render :",
          Products.length,
          ProductsCategory.length
        )}
        {render_products(ProductsCategory)}
      </div>
    </div>
  );
}; //end App
