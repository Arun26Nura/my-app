import React, { useState } from "react";
import ExpenseList from "./ExpenseList";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseChart from "./ExpenseChart";

function Expenses(props) {
  const [defaultYear, selectedYear] = useState("2020");

  const checkYearHandler = (yearValue) => {
    selectedYear(yearValue);
  };

  const filteredArray = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === defaultYear;
  });

  

  return (
    <Card className="expenses">
      <ExpenseChart expenses={filteredArray}/>
      <ExpenseFilter selected={defaultYear} checkYear={checkYearHandler} />
      <ExpenseList items={filteredArray}></ExpenseList>
    </Card>
  );
}

export default Expenses;
