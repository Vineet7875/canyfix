import React from 'react';
import "../Styles/Section1.css"
import data from '../JSONData/data.json'
const Section1 = () => {
  const { products, brands, models, problems } = data;

  return (
    <div className="container">
      <div className="left-side">
        <img src="left-img.png" alt="Left Image" />
      </div>
      <div className="right-side">
        <div className="head-circle">
          <div className="headers">
            <h1>Genuine Repairs</h1>
            <h2 className="orange-color">At your doorstep</h2>
          </div>
          {/* <div className="circle1">
            <span className="circle-text">$0.00</span>
          </div> */}
        </div>
        <div className="dropdowns">
          <select className="dropdown dropdown-product">
            <option value="">Select Product</option>
            {products.map((product, index) => (
              <option value={product.value} key={index}>
                {product.label}
              </option>
            ))}
          </select>
          <select className="dropdown">
            <option value="">Select Brand</option>
            {brands.map((brand, index) => (
              <option value={brand.value} key={index}>
                {brand.label}
              </option>
            ))}
          </select>
          <select className="dropdown">
            <option value="">Select Model</option>
            {models.map((model, index) => (
              <option value={model.value} key={index}>
                {model.label}
              </option>
            ))}
          </select>
          <select className="dropdown">
            <option value="">Select Problem</option>
            {problems.map((problem, index) => (
              <option value={problem.value} key={index}>
                {problem.label}
              </option>
            ))}
          </select>
        </div>
        <button className="orange-button">Rs 0.00</button>
        <div className="features">
          {data.features.map((feature, index) => (
            <div className="star-para" key={index}>
              <img src="blue_star.jpg" alt={`Circle ${index + 1}`} />
              <p>{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section1;

