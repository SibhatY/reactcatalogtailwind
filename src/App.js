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

  const renderCart = () => {
    return (
      <div className="category-section fixed">
        <div className="bg-white p-4 rounded shadow-lg">
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
        <span style={{ position: "absolute", right: 0 }}>
          {checkoutButton()}
        </span>
      </div>
    );
  };

  // const renderForm = () => {
  //   return (

  //     <div className="category-section fixed" style={{float: "left"}}>

  // <head>

  //   <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet"
  //     integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossOrigin="anonymous"></link>
  //   <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"
  //     integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa"
  //     crossOrigin="anonymous"></script>
  //   <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"></link>

  // </head>

  // <body>

  // <div className="container">

  // <div className="row">
  //   <div className="col-2"></div>

  //   <div className="col-8">

  //     <h1>Javascript Form Validation</h1>

  //     <div id="liveAlertPlaceholder"></div>

  //     <form className="row g-3" id="checkout-form">

  //       <div className="col-md-6">
  //         <label htmlFor="inputName" className="form-label">Full Name</label>
  //         <input type="text" className="form-control" id="inputName"></input>
  //         <div className="valid-feedback">
  //           Looks good!
  //         </div>
  //         <div className="invalid-feedback">
  //           Must be like, "John Doe"
  //         </div>
  //       </div>

  //       <div className="col-md-6">
  //         <label htmlFor="inputEmail4" className="form-label">Email</label>
  //         <input type="email" className="form-control" id="inputEmail4"></input>
  //         <div className="valid-feedback">
  //           Looks good!
  //         </div>
  //         <div className="invalid-feedback">
  //           Must be like, "abc@xyz.efg"
  //         </div>
  //       </div>

  //       <div className="col-12">
  //         <label htmlFor="inputCard" className="form-label">Card</label>
  //         <div className="input-group mb-3">
  //           <span className="input-group-text" id="basic-addon1"><i className="bi-credit-card-fill"></i></span>
  //           <input type="text" id="inputCard" className="form-control" placeholder="XXXX-XXXX-XXXX-XXXX"
  //             aria-label="Username" aria-describedby="basic-addon1"></input>
  //           <div className="valid-feedback">
  //             Looks good!
  //           </div>
  //           <div className="invalid-feedback">
  //             Must be like, "7777-7777-7777-7777"
  //           </div>
  //         </div>
  //       </div>

  //       <div className="col-12">
  //         <label htmlFor="inputAddress" className="form-label">Address</label>
  //         <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"></input>
  //       </div>
  //       <div className="col-12">
  //         <label htmlFor="inputAddress2" className="form-label">Address 2</label>
  //         <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"></input>
  //       </div>
  //       <div className="col-md-6">
  //         <label htmlFor="inputCity" className="form-label">City</label>
  //         <input type="text" className="form-control" id="inputCity"></input>
  //       </div>
  //       <div className="col-md-4">
  //         <label htmlFor="inputState" className="form-label">State</label>
  //         <select id="inputState" className="form-select">
  //           <option selected>Choose...</option>
  //         </select>
  //       </div>
  //       <div className="col-md-2">
  //         <label htmlFor="inputZip" className="form-label">Zip</label>
  //         <input type="text" className="form-control" id="inputZip"></input>
  //       </div>
  //       <div className="col-12">
  //         <div className="form-check">
  //           <input className="form-check-input" type="checkbox" id="gridCheck"></input>
  //           <label className="form-check-label" for="gridCheck">
  //             Check me out
  //           </label>
  //         </div>
  //       </div>
  //       <div className="col-12">
  //         <button type="submit" className="btn btn-success"> <i className="bi-bag-check"></i> Order</button>
  //       </div>
  //     </form>

  //     <div className="card collapse" style={{width: "18rem"}}>
  //       <div className="card-body">
  //         <h5 className="card-title">Order summary</h5>
  //         <p className="card-text">Here is a summary of your order.</p>
  //       </div>
  //       <ul className="list-group list-group-flush">

  //       </ul>
  //       <a href="" onClick="location.reload()" className="btn btn-secondary"> <i className="bi-arrow-left-circle"></i>
  //         Return</a>
  //     </div>

  //     <footer className="bd-footer py-4 py-md-5 mt-5 bg-light">
  //       <div className="container py-4 py-md-5 px-4 px-md-3">
  //         <div className="row">
  //           <div className="col-lg-12 mb-3">
  //             <b>SE/Com-S 319</b> Javascript form validation.
  //           </div>

  //         </div>
  //       </div>
  //     </footer>

  //   </div>

  //   <div className="col-2"></div>

  // </div>

  // </div>

  // <script type="text/javascript" src="validationForm.js"></script>

  // </body>

  //     </div>
  //   );
  // };

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
            <td className="p-2"><img class="img-fluid" src={el.image} width={100} /></td>
            <td className="p-2">{el.price}</td>
          </tr>
        </tbody>
  ));

  return (
    <div className="flex fixed flex-row">
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
      <div className="ml-5  p-10 xl:basis-4/5">
        {console.log("Before render :", data.length, ProductsCategory.length)}
        {/* {render_products(ProductsCategory)} */}
        {/* Add renderForm() to test */}
        {showCheckout ? renderCart() : render_products(ProductsCategory)}
      </div>
    </div>
  );
}; //end App
