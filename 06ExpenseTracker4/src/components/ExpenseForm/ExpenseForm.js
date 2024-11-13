import React, { useEffect, useRef } from "react";
import styles from "./ExpenseForm.module.css";

const ExpenseForm = ({ addExpense, updateData, updateExpense }) => {
  const expenseTextInput = useRef();
  const expenseAmountInput = useRef();
  console.log(updateData);

  // Use the useEffect hook here, to check if an expense is to be updated
  // If yes, the autofill the form values with the text and amount of the expense
  useEffect(() => {
    if (updateData) {
      expenseAmountInput.current.value = updateData.amount || "";
      expenseTextInput.current.value = updateData.text || "";
    }
  }, [updateData]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const expenseText = expenseTextInput.current.value;
    const expenseAmount = expenseAmountInput.current.value;
    console.log(expenseText);
    console.log(expenseAmount);

    if (parseInt(expenseAmount) === 0) {
      return;
    }

    const expense = {
      text: expenseText,
      amount: expenseAmount,
      id: updateData ? updateData.id : new Date().getTime(),
    };
    if (updateData) {
      updateExpense(expense);
    } else {
      addExpense(expense);
    }

    clearInput();
    return;

    // Logic to update expense here
  };
  const handleChange = () => {};
  const clearInput = () => {
    expenseAmountInput.current.value = "";
    expenseTextInput.current.value = "";
  };

  return (
    <form className={styles.form} onSubmit={onSubmitHandler}>
      {/* Change text to Edit Transaction if an expense is to be updated */}
      <h3>{updateData ? "Edit Transaction" : "Add new transaction"}</h3>
      <label htmlFor="expenseText">Text</label>
      <input
        id="expenseText"
        className={styles.input}
        type="text"
        placeholder="Enter text..."
        ref={expenseTextInput}
        onChange={handleChange}
        required
      />
      <div>
        <label htmlFor="expenseAmount">Amount</label>
        <div>(negative - expense,positive-income)</div>
      </div>
      <input
        className={styles.input}
        id="expenseAmount"
        type="number"
        placeholder="Enter amount..."
        ref={expenseAmountInput}
        required
      />
      <button className={styles.submitBtn}>
        {/* Change text to Edit Transaction if an expense is to be updated */}
        {updateData ? "Edit Transaction" : "Add new transaction"}
      </button>
    </form>
  );
};

export default ExpenseForm;
