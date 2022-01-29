import React, { useState, useEffect } from "react";
import axios from "axios";
import { TOKEN_ID } from "../utils/constants";

const Expense = () => {
  const [category, setCategory] = React.useState("Food");
  const [methodType, setMethodType] = React.useState("Expense");
  const [amount, setAmount] = React.useState(0);
  const [inhandCash, setInhandCash] = React.useState(0);

  const fetchTotal = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/expense/total", {
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": localStorage.getItem(TOKEN_ID),
        },
      });
      console.log("use eff tot");
      console.log(res);
      setInhandCash(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchTotal();
  }, []);

  const handleSubmit = async (e) => {
    console.log(category, methodType, amount);
    const data = {
      category,
      methodType,
      amount,
    };
    const res = await axios.post("http://localhost:5000/api/expense", data, {
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": localStorage.getItem(TOKEN_ID),
      },
    });
    console.log(res);
    setAmount(0);
  };
  return (
    <div>
      <h1>Total in pocket: {inhandCash}</h1>
      <form>
        <label>Type:</label>
        <select
          onChange={(e) => {
            setMethodType(e.target.value);
          }}
        >
          <option value="Expense">Expense</option>
          <option value="Income">Income</option>
        </select>
        <label>Categories</label>
        <select
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        >
          <option value="Food">Food</option>
          <option value="Travel">Travel</option>
          <option value="Rent">Rent</option>
          <option value="Utilities">Utilities</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Shopping">Shopping</option>
          <option value="Others">Others</option>
        </select>
        <input
          type="number"
          placeholder="Amount"
          onChange={(e) => {
            setAmount(e.target.value);
          }}
        ></input>
        <button type="submit" onClick={handleSubmit}>
          Add
        </button>
      </form>
    </div>
  );
};

export default Expense;
