import { useState, useReducer } from "react";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import ExpenseInfo from "./components/ExpenseInfo/ExpenseInfo";
import ExpenseList from "./components/ExpenseList/ExpenseList";
import "./App.css";
function expenseReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [action.expense, ...state];
    case "REMOVE":
      const removExp = state.filter((expense) => expense.id !== action.index);
      // console.log(removExp);
      return removExp;
    default:
      return [];
  }
}

function App() {
  // Remove the useState hook and replace it with useReducer hook
  // Implement the functionality to add and remove the transaction in reducer function
  // const [expenses, setExpenses] = useState([]);
  const [expenses, dispatch] = useReducer(expenseReducer, []);

  function addExpense(expense) {
    dispatch({ type: "ADD", expense: expense });
  }
  function deleteExpense(id) {
    console.log(id);
    dispatch({ type: "REMOVE", index: id });
  }

  return (
    <>
      <h2 className="mainHeading">Expense Tracker</h2>
      <div className="App">
        <ExpenseForm addExpense={addExpense} />
        <div className="expenseContainer">
          <ExpenseInfo expenses={expenses} />
          <ExpenseList expenses={expenses} deleteExpense={deleteExpense} />
        </div>
      </div>
    </>
  );
}

export default App;
