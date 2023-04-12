import "./App.css";
import logo from "./logo.png";
import React, { useState, useEffect } from "react";
// import { Products } from "./Products";
import data from "./last.json";
import { Categories } from "./Categories";

export const App = () => {
  console.log("Step 1: After reading file :");

  const [ProductsCategory, setProductsCategory] = useState(data);
  const [query, setQuery] = useState("");
  const [showCheckout, setShowCheckout] = useState(false);
  // var ProductsCategory = Products;
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  const checkoutButton = () => {
    if (cart.length > 0) {
      return (
        <button
          onClick={handleShowCheckout}
          className="bg-blue-500 text-white rounded-md px-3 py-2 mt-3"
        >
          {showCheckout ? "Return" : "Checkout"}
        </button>
      );
    } else {
      return null;
    }
  };

  function handleShowCheckout() {
    setShowCheckout(!showCheckout);
  }

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    cardNumber: '',
    address: '',
    city: '',
    state: '',
    zip: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Submit the form data to the server
    console.log(formData);
  };

  const renderCart = () => {
    return (
      <div className="category-section fixed">
        <div className="bg-white p-4 rounded shadow-lg" style={{ maxHeight: "400px", overflow: "auto" }}>
          <table className="w-full text-center">
            <thead>
              <tr className="font-bold">
                <th className="p-2">Product Name</th>
                <th className="p-2">Image</th>
                <th className="p-2">Price</th>
              </tr>
            </thead>
            {cartItems}
          </table>
        </div>
        <tr>
          <td className="font-bold p-2" colSpan="3">
            Total:
          </td>
          <td className="font-bold p-2">{cartTotal}</td>
        </tr>
        <span style={{ position: "absolute", right: 0, zIndex: 100}}>
          {checkoutButton()}
        </span>
        {render_form()}
       
      </div>
      
    );
  };


  const render_form = () => {
    return (
      <div className="flex justify-center items-center h-screen" style={{ maxHeight: "100vh", overflowY: "auto"}}>
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h1 style={{textAlign: "center"}}><strong>Payment Information</strong></h1>
      <form className="w-full max-w-sm mx-auto mt-8">
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="full-name"
            >
              Full Name
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="full-name"
              type="text"
              placeholder="John Doe"
              value={formData.fullName}
            onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="email"
            >
              Email
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="email"
              type="email"
              placeholder="johndoe@example.com"
              value={formData.email}
            onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="card"
            >
              Card Number
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="card"
              type="text"
              placeholder="0000 0000 0000 0000"
              value={formData.cardNumber}
            onChange={handleInputChange}
            required
            pattern="\d{16}"
              
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="address"
            >
              Address
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="address"
              type="text"
              placeholder="123 Main St"
              value={formData.address}
            onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="city"
            >
              City
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="city"
              type="text"
              placeholder="New York City"
              value={formData.city}
            onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="state"
            >
              State
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="state"
              type="text"
              placeholder="New York"
              value={formData.state}
            onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="zip"
            >
              ZIP
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="zip"
              type="text"
              placeholder="12345"
              value={formData.zip}
            onChange={handleInputChange}
            required
            pattern="\d{5}"
              
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        >
          Submit
        </button>
      </form>
      </div>
      </div>
    );
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
                  {...console.log(product.image)}
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
                  {/* <p className="mt-1 text-sm text-gray-500">
                    Rating: {product.rating.rate}
                  </p> */}
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
        <span style={{ position: "absolute", right: 100 }}>
          {checkoutButton()}
        </span>
      </div>
    );
  };

  function handleClick(tag) {
    console.log("Step 4 : in handleClick", tag);
    let filtered = data.filter((cat) => cat.category === tag);
    if (tag === "All") {
      setProductsCategory(data);
    } else {
      setProductsCategory(filtered);
      // ProductsCategory = filtered;
      console.log("Step 5 : ", data.length, ProductsCategory.length);
    }
  }

  const handleChange = (e) => {
    setQuery(e.target.value);
    const results = data.filter((eachProduct) => {
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
    <tbody>
      <tr className="border-b">
        <td className="p-2">{el.title}</td>
        <td className="p-2">
          <img class="img-fluid" src={el.image} width={100} />
        </td>
        <td className="p-2">{el.price}</td>
      </tr>
    </tbody>
  ));

  return (
    <div className="flex fixed flex-row" style={{ maxHeight: "100vh", overflowY: "auto"}}>
      {console.log(
        "Step 2 : Return App :",
        data.length,
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
      <div className="ml-5  p-10 xl:basis-4/5" style={{ maxHeight: "100vh", overflowY: "auto"}}>
        {console.log("Before render :", data.length, ProductsCategory.length)}
        {/* {render_products(ProductsCategory)} */}
        {/* Add renderForm() to test */}
        {showCheckout ? renderCart() : render_products(ProductsCategory)}
      </div>
    </div>
  );
}; //end App
