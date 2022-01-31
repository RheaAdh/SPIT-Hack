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
      setInhandCash(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const settingLink = () => {
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
    const data = {
      category,
      methodType,
      amount,
    };
    try {
      const res = await axios.post("http://localhost:5000/api/expense", data, {
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": localStorage.getItem(TOKEN_ID),
        },
      });
      setAmount(0);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="expenseTracker">
      <div class="expenseHeadline">
        <p align="center" style={{ fontSize: "1.5rem" }}>
          Balance:{" "}
          <span class="amount" style={{ fontSize: "3rem" }}>
            &nbsp;{inhandCash}
          </span>
        </p>
      </div>
      <div className="legend">
        {pieData
          ? pieData.map((data) => (
              <h3 style={{ paddingTop: "0.5rem", backgroundColor: "#192225" }}>
                {data.title} : {data.value}
              </h3>
            ))
          : null}
        <br />
        <span
          style={{
            marginLeft: "1rem",
          }}
        >
          <a
            className="btn"
            href={link}
            style={{
              padding: "10px",
              borderRadius: "15px",
              marginLeft: "-1rem",
            }}
          >
            Download Full Report
          </a>
        </span>
      </div>

      <div className="chart">
        {pieData ? (
          <PieChart data={pieData} style={{ height: "15rem" }} />
        ) : null}
      </div>

      <form className="expenseForm" onSubmit={handleSubmit}>
        <select
          name="type"
          id="type"
          onChange={(e) => {
            setMethodType(e.target.value);
          }}
          style={{ width: "8rem", height: "2rem", marginBottom: "2rem" }}
        >
          <option value="Expense">Expense</option>
          <option value="Income">Income</option>
        </select>

        <select
          name="category"
          id="category"
          onChange={(e) => {
            setCategory(e.target.value);
          }}
          style={{ width: "15rem", height: "2rem", marginBottom: "2rem" }}
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
          id="amount"
          min="0"
          placeholder="Amount"
          onChange={(e) => {
            setAmount(e.target.value);
          }}
          style={{ width: "8rem", height: "2rem", marginBottom: "2rem" }}
        ></input>

        <input type="submit" id="expenseSubmit" value="+"></input>
      </form>
    </div>
  );
};

export default Expense;
