import React, { useState, useEffect } from "react";

const Form = (props) => {
  const {
    values,
    onInputChange,
    onSubmit,
    disabled,
    errors,
    onCheckboxChange,
    sauceChange,
  } = props;

  return (
    <form onSubmit={onSubmit}>
      <div>
        <h2>Build Your Own Pizza</h2>

        <div className="errors">
          <div>{errors.name}</div>
          <div>{errors.size}</div>
          <div>{errors.sauce}</div>
        </div>
      </div>

      <div>
        <label>
          Name
          <input
            type="text"
            placeholder="Please Enter Your Name"
            minLength="2"
            name="name"
            value={values.name}
            onChange={onInputChange}
          />
        </label>

        {/* Dropdown Menu */}

        <h3>Choice of Size *required</h3>
        <label>
          <select name="size" onChange={onInputChange}>
            <option value="">Select a Size</option>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
            />
          </select>
        </label>

        <h3>Choice of Sauce *required</h3>
        <label>
          <input type="radio" name="sauce" id="red" onChange={sauceChange} />
          Original Red
          <input type="radio" name="sauce" id="garlic" onChange={sauceChange} />
          Garlic Ranch
          <input type="radio" name="sauce" id="bbq" onChange={sauceChange} />
          BBQ Sauce
          <input
            type="radio"
            name="sauce"
            id="spinach"
            onChange={sauceChange}
          />
          Spinach Alfredo
        </label>

        {/* CheckBox */}
        <h3>Add Some Toppings!</h3>
        <label>
          <input type="checkbox" name="Pepperoni" onChange={onCheckboxChange} />
          Pepperoni
        </label>

        <label>
          <input type="checkbox" name="Cheese" onChange={onCheckboxChange} />
          Cheese
        </label>

        <label>
          <input
            type="checkbox"
            name="ExPepperoni"
            onChange={onCheckboxChange}
          />
          Extra Pepperoni
        </label>

        <label>
          <input type="checkbox" name="ExCheese" onChange={onCheckboxChange} />
          Extra Cheese
        </label>
        {/* <h3>Any Special Instructions?</h3>
        <label>
          <input
            type="text"
            placeholder="Enter Special Instructions"
            minLength="2"
            name="name"
            value={values.name}
            onChange={onInputChange}
          />
        </label> */}
        <h3>Finalzie Order?</h3>
        <button className="order" disabled={disabled}>
          Add to Order
        </button>
      </div>
    </form>
  );
};

export default Form;
