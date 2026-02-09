import React, { useState } from "react";

const Dashboard = () => {
  const [expenseName, setExpenseName] = useState("");
  const [amount, setAmount] = useState("");
  const [expenses, setExpenses] = useState([]);

  const handleAddExpense = () => {
    if (expenseName === "" || amount === "") {
      alert("Please enter expense name and amount");
      return;
    }

    const newExpense = {
      name: expenseName,
      amount: Number(amount),
    };

    setExpenses([...expenses, newExpense]);
    setExpenseName("");
    setAmount("");
  };

  return (
    <div className="dashboard">
      <h1>💰 Personal Finance Tracker</h1>

      <div className="cards">
        <div className="card income">
          <h3>Total Income</h3>
          <p>₹50,000</p>
        </div>

        <div className="card expense">
          <h3>Total Expense</h3>
          <p>
            ₹{expenses.reduce((sum, e) => sum + e.amount, 0)}
          </p>
        </div>

        <div className="card balance">
          <h3>Balance</h3>
          <p>
            ₹{50000 - expenses.reduce((sum, e) => sum + e.amount, 0)}
          </p>
        </div>
      </div>

      <div className="add-expense">
        <h2>Add Expense</h2>

        <input
          type="text"
          placeholder="Expense Name"
          value={expenseName}
          onChange={(e) => setExpenseName(e.target.value)}
        />

        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <button onClick={handleAddExpense}>Add</button>
      </div>

      <div className="add-expense" style={{ marginTop: "20px" }}>
        <h2>Expense List</h2>
        {expenses.length === 0 ? (
          <p>No expenses added</p>
        ) : (
          <ul>
            {expenses.map((exp, index) => (
              <li key={index}>
                {exp.name} - ₹{exp.amount}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
