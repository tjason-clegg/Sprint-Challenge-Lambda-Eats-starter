import React, { useState, useEffect } from "react";
import axios from "axios";

const Form = (props) => {
  const {
    values,
    onInputChange,
    onSubmit,
    disabled,
    errors,
    onCheckboxChange,
  } = props;

  return (
    <form>
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
          <input type="radio" name="sauce" onChange={onInputChange} />
          Original Red
          <input type="radio" name="sauce" onChange={onInputChange} />
          Garlic Ranch
          <input type="radio" name="sauce" onChange={onInputChange} />
          BBQ Sauce
          <input type="radio" name="sauce" onChange={onInputChange} />
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
        <h3>Any Special Instructions?</h3>
        <label>
          <input
            type="text"
            placeholder="Enter Special Instructions"
            minLength="2"
            name="name"
            value={values.name}
            onChange={onInputChange}
          />
        </label>
        <h3>Finalzie Order?</h3>
        <button className="order" disabled={disabled}>
          Add to Order
        </button>
      </div>
    </form>
  );
};

export default Form;
