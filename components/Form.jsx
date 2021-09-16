import React, { useState } from "react";

const Form = ({ initialProduct, handleSubmit, buttonLabel, history }) => {
  const [formData, setFormData] = useState(initialProduct);

  /////////////////////////
  // Functions
  /////////////////////////
  const handleChange = (event) => {
    // if (event.target.name === "read") {
    //   setFormData({ ...formData, [event.target.name]: event.target.checked });
    // } else {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    // }
  };

  const handleSubmission = (event) => {
    event.preventDefault();
    handleSubmit(formData);
    history.push("/");
  };

  return (
    <form onSubmit={handleSubmission}>
      <div className="photos-box">
        Photos
        <input
          type="file"
          onChange={handleChange}
          //   value={formData.photo}
          name="image"
          accept="image/png, image/jpeg, image/heic"
        />
      </div>
      <div className="details-box">
        Listing Details
        <input
          type="text"
          onChange={handleChange}
          //   value={formData.title}
          name="title"
          placeholder="Title"
        />
        <input
          type="text"
          onChange={handleChange}
          //   value={formData.category}
          name="category"
          placeholder="Category"
        >
          <datalist id="category">
            <option value="Clothing and Shoes" />
            <option value="Home and Living" />
            <option value="Eco-friendly Products" />
            <option value="Self-care Goods" />
          </datalist>
        </input>
        <input
          type="text"
          onChange={handleChange}
          //   value={formData.description}
          name="description"
          placeholder="Description"
        />
      </div>
      {/* <label htmlFor="read">
        Read?: */}
      <div className="pricing-box">
        Inventory and Pricing
        <input
          type="number"
          onChange={handleChange}
          //   value={formData.price}
          name="price"
          placeholder="Price"
        />
        <input
          type="number"
          onChange={handleChange}
          //   value={formData.quantity}
          name="quantity"
          placeholder="Quantity"
        />
        <input
          type="number"
          onChange={handleChange}
          //   value={formData.SKU}
          name="SKU"
          placeholder="SKU Number"
        />
      </div>
      {/* </label> */}
      <input type="submit" value={buttonLabel} />
    </form>
  );
};

export default Form;
