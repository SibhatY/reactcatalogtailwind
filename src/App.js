import "./App.css";
import logo from "./logo.png";
import React, { useState, useEffect } from "react";
// import { Products } from "./Products";
import data from "./last.json";
import { Categories } from "./Categories";
import { isCursorAtEnd } from "@testing-library/user-event/dist/utils";

export const App = () => {
  console.log("Step 1: After reading file :");

  const [ProductsCategory, setProductsCategory] = useState(data);
  const [query, setQuery] = useState("");
  const [showCheckout, setShowCheckout] = useState(false);
  const [showEnd, setShowEnd] = useState(false);
  // var ProductsCategory = Products;
  const [cart, setCart] = useState([]);
  // const [cartTotal, setCartTotal] = useState(0);

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

  const endpageButton = () => {
    if (showEnd === true) {
      return (
        <button
          onClick={handleShowEndPage}
          className="bg-blue-500 text-white rounded-md px-3 py-2 mt-3"
        >
          Return
        </button>
      );
    } else {
      return null;
    }
  };

  function handleShowCheckout() {
    setShowCheckout(!showCheckout);
  }

  function handleShowEndPage(){
    setShowEnd(false);
    handleShowCheckout();
    setCart([]);

  }

  const render_endpage = () => {
    const taxRate = 0.06; // 6% tax rate
    const cartItems = Array.from(new Set(cart.map((item) => item.id))).map(
      (id) => {
        const count = cart.filter((item) => item.id === id).length;
        const product = data.find((item) => item.id === id);
        return (
          <tr key={product.id} className="border-b">
            <td className="p-2">{`${product.title} (${count})`}</td>
            <td className="p-2">
              <img src={product.image} alt={product.name} width="50" />
            </td>
            <td className="p-2">{`$${product.price.toFixed(2)}`}</td>
          </tr>
        );
      }
    );
    const subtotal = cart.reduce((acc, curr) => acc + curr.price, 0);
    const taxAmount = subtotal * taxRate;
    const total = subtotal + taxAmount;
  return (
    <div className="flex flex-col items-center justify-center mt-16">
      <p className="text-3xl font-bold mb-4">Done with the order!</p>
      <p className="text-lg mb-2">Thank you {formData.fullName}!</p>
      <p className="text-lg mb-2">You ordered these items: <strong>{cartItems}</strong> for a total of {`$${total.toFixed(2)}`}</p>
      <p className="text-lg mb-2">Shipped to {formData.address}, {formData.city}, {formData.state}, {formData.zip}</p>
      <p className="text-lg mb-4">You will recieve your package in 3 business days!</p>
      {endpageButton()}
    </div>
  );
};

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    cardNumber: '',
    address: '',
    city: '',
    state: '',
    zip: ''
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Submit the form data to the server
    setShowEnd(true);
    console.log(formData);
  };

  

  const render_form = () => {
    return (
      <div className="flex justify-center items-center h-screen" style={{ maxHeight: "100vh", overflowY: "auto"}}>
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h1 style={{textAlign: "center"}}><strong>Payment Information</strong></h1>
      <form className="w-full max-w-sm mx-auto mt-8" onSubmit={handleSubmit}>
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
              onChange={(event) =>
                setFormData({ ...formData, fullName: event.target.value })
              }
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
              onChange={(event) =>
                setFormData({ ...formData, email: event.target.value })
              }
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
              onChange={(event) =>
                setFormData({ ...formData, card: event.target.value })
              }
            required
            pattern= "[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}"
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
              onChange={(event) =>
                setFormData({ ...formData, address: event.target.value })
              }
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
              onChange={(event) =>
                setFormData({ ...formData, city: event.target.value })
              }
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
              onChange={(event) =>
                setFormData({ ...formData, state: event.target.value })
              }
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
              onChange={(event) =>
                setFormData({ ...formData, zip: event.target.value })
              }
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

  


//Old render cart just incase new one has issues

  const renderCart = () => {
    const taxRate = 0.06; // 6% tax rate
    const cartItems = Array.from(new Set(cart.map((item) => item.id))).map(
      (id) => {
        const count = cart.filter((item) => item.id === id).length;
        const product = data.find((item) => item.id === id);
        return (
          <tr key={product.id} className="border-b">
            <td className="p-2">{`${product.title} (${count})`}</td>
            <td className="p-2">
              <img src={product.image} alt={product.name} width="50" />
            </td>
            <td className="p-2">{`$${product.price.toFixed(2)}`}</td>
          </tr>
        );
      }
    );
    const subtotal = cart.reduce((acc, curr) => acc + curr.price, 0);
    const taxAmount = subtotal * taxRate;
    const total = subtotal + taxAmount;

    if(showEnd === false){
  
    return (
      <div className="category-section fixed" style={{ maxHeight: "100vh", overflowY: "auto", maxWidth: "100vw"}}>
        <div
          className="bg-white p-4 rounded shadow-lg"
          style={{ maxHeight: "400px", overflow: "auto" }}
        >
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
        <div className="bg-white p-4 rounded shadow-lg mt-4">
          <div className="flex justify-between mb-2">
            <div className="font-bold">Subtotal:</div>
            <div className="font-bold">{`$${subtotal.toFixed(2)}`}</div>
          </div>
          <div className="flex justify-between mb-2">
            <div className="font-bold">Tax ({taxRate * 100}%):</div>
            <div className="font-bold">{`$${taxAmount.toFixed(2)}`}</div>
          </div>
          <hr className="my-2" />
          <div className="flex justify-between">
            <div className="font-bold">Total:</div>
            <div className="font-bold">{`$${total.toFixed(2)}`}</div>
          </div>
        </div>
        <span style={{ position: "absolute", right: 0, zIndex: 10 }}>
          {checkoutButton()}
        </span>
        {render_form()}
      </div>
    );
    }else{
      return (
        <div>
        {render_endpage()}
        </div>
      )
    }
  };

  // const renderCart = () => {
  //   const taxRate = 0.06; // 6% tax rate
  //   const cartItems = Array.from(new Set(cart.map((item) => item.id))).map(
  //     (id) => {
  //       const count = cart.filter((item) => item.id === id).length;
  //       const product = data.find((item) => item.id === id);
  //       return (
  //         <tr key={product.id} className="border-b">
  //           <td className="p-2">{`${product.title} (${count})`}</td>
  //           <td className="p-2">
  //             <img src={product.image} alt={product.name} width="50" />
  //           </td>
  //           <td className="p-2">{`$${product.price.toFixed(2)}`}</td>
  //         </tr>
  //       );
  //     }
  //   );
  //   const subtotal = cart.reduce((acc, curr) => acc + curr.price, 0);
  //   const taxAmount = subtotal * taxRate;
  //   const total = subtotal + taxAmount;
  
  //   if (showEnd === false) {
  //     return (
  //       <div className="category-section fixed max-h-screen overflow-y-auto max-w-full">
  //         <div className="bg-white p-4 rounded shadow-lg max-h-400 overflow-auto">
  //           <table className="w-full text-center">
  //             <thead>
  //               <tr className="font-bold">
  //                 <th className="p-2">Product Name</th>
  //                 <th className="p-2">Image</th>
  //                 <th className="p-2">Price</th>
  //               </tr>
  //             </thead>
  //             <tbody>{cartItems}</tbody>
  //           </table>
  //         </div>
  //         <div className="bg-white p-4 rounded shadow-lg mt-4">
  //           <div className="flex justify-between mb-2">
  //             <div className="font-bold">Subtotal:</div>
  //             <div className="font-bold">{`$${subtotal.toFixed(2)}`}</div>
  //           </div>
  //           <div className="flex justify-between mb-2">
  //             <div className="font-bold">Tax ({taxRate * 100}%):</div>
  //             <div className="font-bold">{`$${taxAmount.toFixed(2)}`}</div>
  //           </div>
  //           <hr className="my-2" />
  //           <div className="flex justify-between">
  //             <div className="font-bold">Total:</div>
  //             <div className="font-bold">{`$${total.toFixed(2)}`}</div>
  //           </div>
  //         </div>
  //         <span className="absolute right-0 z-10">{checkoutButton()}</span>
  //         {render_form()}
  //       </div>
  //     );
  //   } else {
  //     return <div>{render_endpage()}</div>;
  //   }
  // };


  const render_products = (ProductsCategory) => {
    return (
      <div className="category-section fixed">
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
              <div className="min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden lg:h-60 lg:aspect-none">
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
                      <span className="text-lg font-medium text-green-600">
                        {product.title}
                      </span>
                    </a>
                  </h3>
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
                  className="border border-green-500 bg-white py-1 px-2 text-lg font-medium"
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

  // useEffect(() => {
  //   total();
  // }, [cart]);

  // const total = () => {
  //   let totalVal = 0;
  //   for (let i = 0; i < cart.length; i++) {
  //     totalVal += cart[i].price;
  //   }
  //   setCartTotal(totalVal);
  // };

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
            <input type="search" value={query} onChange={handleChange} className="w-full px-4 py-2 border-gray-400 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:ring-opacity-50" placeholder="Search products" />
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
