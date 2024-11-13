import "./App.css";
import React from "react";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import ExpenseInfo from "./components/ExpenseInfo/ExpenseInfo";
import ExpenseList from "./components/ExpenseList/ExpenseList";

export default function App() {
  // Create state for the expenses here

  return (
    <>
      <h2 className="mainHeading">Expense Tracker</h2>
      <div className="App">
        {/* Render expense form here */}
        <ExpenseForm />
        <div className="expenseContainer">
          {/* Render Expense Info here
            Render Expense List here */}
          <ExpenseInfo />
          <ExpenseList />
        </div>
      </div>
    </>
  );
}
