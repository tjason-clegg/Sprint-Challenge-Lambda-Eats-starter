import React, { useState, useEffect, useParams } from "react";
import Form from "./PizzaForm";
import formSchema from "./formShema";
import axios from "axios";
import * as yup from "yup";

import { Route, Switch, Link, Router } from "react-router-dom";

const initialFormValues = {
  name: "",
  size: "",
  instr: "",
  red: false,
  garlic: false,
  bbq: false,
  spinach: false,
};

const initialFormErrors = {
  name: "",
  size: "",
};

const initialOrderList = {};

const initialDisabled = true;

const App = () => {
  const [orders, setOrders] = useState(initialOrderList);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const onCheckboxChange = (event) => {
    const { name } = event.target;
    const { checked } = event.target;
    setFormValues({
      ...formValues,
      [name]: checked,
    });
  };

  const onInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    yup
      .reach(formSchema, name)
      .validate(value)
      .then((valid) => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })
      .catch((error) => {
        setFormErrors({
          ...formErrors,
          [name]: error.errors[0],
        });
      });

    setFormValues({ ...formValues, [name]: value });
  };

  const postNewOrder = (newOrders) => {
    axios
      .post("https://reqres.in/", newOrders)
      .then((res) => {
        setOrders([res.data, ...orders]);
      })
      .catch((error) => {
        console.error("Server Error", error);
      })
      .finally(() => {
        setFormValues(initialFormValues);
        console.log(newOrders);
      });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const newOrder = { ...formValues };
    postNewOrder(newOrder);
  };

  useEffect(() => {
    formSchema.isValid(formValues).then((valid) => {
      console.log(valid);
      setDisabled(!valid);
    });
  }, [formValues]);

  return (
    <div>
      <h1>Lambda Eats</h1>

      <Form
        values={formValues}
        onInputChange={onInputChange}
        onSubmit={onSubmit}
        disabled={disabled}
        errors={formErrors}
        onCheckboxChange={onCheckboxChange}
      />
    </div>
  );
};

export default App;
