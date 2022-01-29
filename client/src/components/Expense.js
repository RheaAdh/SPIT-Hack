import React, { useState, useEffect } from "react";
import axios from "axios";
import { TOKEN_ID } from "../utils/constants";
import { useAuth } from "../context/AuthContext";
import { PieChart } from "react-minimal-pie-chart";

const Expense = () => {
  const auth = useAuth();
  const [category, setCategory] = React.useState("Food");
  const [methodType, setMethodType] = React.useState("Expense");
  const [amount, setAmount] = React.useState(0);
  const [inhandCash, setInhandCash] = React.useState(0);
  const [link, setLink] = React.useState("");
  const [pieData, setPieData] = React.useState([]);
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

  const settingLink = () => {
    console.log(auth.user._id);
    if (auth.user._id)
      setLink(`http://localhost:5000/api/expense/createSheet/${auth.user._id}`);
  };

  const fetchExpenseData = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/expense/data`, {
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": localStorage.getItem(TOKEN_ID),
        },
      });
      console.log(res);
      setPieData(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchExpenseData();
    settingLink();
    fetchTotal();
  }, []);

  const handleSubmit = async (e) => {
    console.log("inside handle submit");

    const data = {
      category,
      methodType,
      amount,
    };
    console.log(data);
    try {
      const res = await axios.post("http://localhost:5000/api/expense", data, {
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": localStorage.getItem(TOKEN_ID),
        },
      });
      console.log(res);
      setAmount(0);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <h1>Balance: {inhandCash}</h1>
      {pieData ? <PieChart data={pieData} style={{ height: "10rem" }} /> : null}
      {pieData
        ? pieData.map((data) => (
            <div>
              <h3>
                {data.title} : {data.value}
              </h3>
            </div>
          ))
        : null}
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
      <a href={link}>Download Report</a>
    </div>
  );
};

export default Expense;
