import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [initialTitle, ChangedTitle] = useState("");
  const [initialAmount, ChangedAmount] = useState("");
  const [initialDate, ChangedDate] = useState("");

  const titleHandler = (event) => {
    ChangedTitle(event.target.value);
  };
  const valueHandler = (event) => {
    ChangedAmount(event.target.value);
  };
  const dateHandler = (event) => {
    ChangedDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredValue = {
      title: initialTitle,
      amount: initialAmount,
      date: new Date(initialDate),
    };
    ChangedTitle("");
    ChangedAmount("");
    ChangedDate("");
    console.log(enteredValue);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label> Title </label>
          <input type="text" value={initialTitle} onChange={titleHandler} />
        </div>
        <div className="new-expense__control">
          <label> Value </label>
          <input
            type="number"
            min=".01"
            step=".01"
            value={initialAmount}
            onChange={valueHandler}
          />
        </div>
        <div className="new-expense__control">
          <label> Date </label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-03-22"
            value={initialDate}
            onChange={dateHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add New</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
