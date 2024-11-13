import React from "react";
import styles from "./ExpenseInfo.module.css";

const ExpenseInfo = (props) => {
  const { expenses } = props;
  // Add logic here to calculate the grand total, profit and expense amount here
  const amounts = expenses.map((exp) => exp.amount);
  const total = amounts.reduce((acc, amount) => acc + Number(amount), 0);

  const profit = amounts
    .filter((amount) => Number(amount) > 0)
    .reduce((acc, amount) => acc + Number(amount), 0);

  const expense = amounts
    .filter((amount) => Number(amount) < 0)
    .reduce((acc, amount) => acc + Number(amount), 0);
  console.log(`total is ${total} profit ${profit} expense ${expense}`);

  return (
    <div className={styles.expenseInfoContainer}>
      <div className={styles.balance}>
        <h4>YOUR BALANCE</h4>
        <h1>${total}</h1>
      </div>
      <div className={styles.incomeExpenseContainer}>
        <div>
          <h4>Income</h4>
          <p id="money-plus" className={`${styles.money} ${styles.plus}`}>
            +${profit}
          </p>
        </div>
        <div>
          <h4>Expense</h4>
          <p id="money-minus" className={`${styles.money} ${styles.minus}`}>
            -${expense}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExpenseInfo;
