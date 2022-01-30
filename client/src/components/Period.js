import React, { useEffect } from "react";
import axios from "axios";
import { TOKEN_ID } from "../utils/constants";

const Period = () => {
  const [periodCycle, setPeriodCycle] = React.useState(0);
  // const [periodLength, setPeriodLength] = React.useState(0);
  const [periodDate, setPeriodDate] = React.useState(new Date());
  const [daysLeft, setDaysLeft] = React.useState(0);

  const handleSubmit = async () => {
    const data = {
      periodDate,
      periodCycle,
      // periodLength,
    };
    const res = await axios.post(
      "http://localhost:5000/api/period/date",
      data,
      {
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": localStorage.getItem(TOKEN_ID),
        },
      }
    );
  };
  const getDays = async () => {
    const res = await axios.get("http://localhost:5000/api/period/daysleft", {
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": localStorage.getItem(TOKEN_ID),
      },
    });
    setDaysLeft(Math.floor(res.data.data));
  };
  useEffect(() => {
    getDays();
  }, []);

  return (
    <div className="menstrualReminder">
      <form onSubmit={handleSubmit} className="menstrualForm">
        <input
          style={{ width: "12rem", height: "2rem" }}
          type="date"
          id="date"
          placeholder="Last Period"
          onChange={(e) => setPeriodDate(e.target.value)}
        ></input>
        <input
          type="number"
          id="amount"
          min="0"
          style={{ width: "8rem", height: "2rem" }}
          placeholder="Cycle period"
          onChange={(e) => setPeriodCycle(e.target.value)}
        ></input>

        <input
          type="submit"
          id="menstrualSubmit"
          placeholder="+"
          style={{
            width: "8rem",
            height: "2rem",
            marginBottom: "2rem",
          }}
        ></input>
      </form>
      <div className="menstrualCount">
        <p align="center">
          <span className="daysLeft">{daysLeft}</span>&nbsp;days until your next
          period
        </p>
      </div>
    </div>
  );
};

export default Period;
