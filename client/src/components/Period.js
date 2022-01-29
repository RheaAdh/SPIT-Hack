import React, { useEffect } from "react";
import axios from "axios";
import { TOKEN_ID } from "../utils/constants";

const Period = () => {
  const [periodCycle, setPeriodCycle] = React.useState(0);
  // const [periodLength, setPeriodLength] = React.useState(0);
  const [periodDate, setPeriodDate] = React.useState(new Date());
  const [daysLeft, setDaysLeft] = React.useState(0);

  const handleSubmit = async () => {
    console.log(periodDate);
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
    console.log("success add period details");
    console.log(res);
  };
  const getDays = async () => {
    const res = await axios.get("http://localhost:5000/api/period/daysleft", {
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": localStorage.getItem(TOKEN_ID),
      },
    });
    console.log("daysleft");
    console.log(res);
    setDaysLeft(Math.floor(res.data.data));
  };
  useEffect(() => {
    getDays();
  }, []);

  return (
    <div className="period">
      <form onSubmit={handleSubmit}>
        {" "}
        <h4>Period</h4>
        <h3>Days left:{daysLeft}</h3>
        <input
          type="date"
          placeholder="Previous Start Date"
          onChange={(e) => setPeriodDate(e.target.value)}
        ></input>
        <input
          type="number"
          placeholder="Cycle Length"
          onChange={(e) => setPeriodCycle(e.target.value)}
        ></input>
        {/* <input
        type="number"
        placeholder="How long is it for"
        onChange={(e) => setPeriodLength(e.target.value)}
      ></input> */}
        <button type="submit">Add Details</button>
      </form>
    </div>
  );
};

export default Period;
