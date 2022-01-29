import React, { useEffect } from "react";
import axios from "axios";
import { TOKEN_ID } from "../utils/constants";

const Event = () => {
  const [eventDate, setEventDate] = React.useState(new Date());
  const [eventType, setEventType] = React.useState("");

  const handleSubmit = async () => {
    const data = {
      eventDate,
      eventType,
    };
    const res = await axios.post("http://localhost:5000/api/event/", data, {
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": localStorage.getItem(TOKEN_ID),
      },
    });
    console.log("success add Event details");
    console.log(res);
  };
  const getDetails = async () => {
    const res = await axios.get("http://localhost:5000/api/event", {
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": localStorage.getItem(TOKEN_ID),
      },
    });
  };
  useEffect(() => {
    getDetails();
  }, []);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h4>Event</h4>

        <input
          type="date"
          placeholder="event Date"
          onChange={(e) => setEventDate(e.target.value)}
        ></input>
        <input
          type="number"
          placeholder="event text"
          onChange={(e) => setEventType(e.target.value)}
        ></input>

        <button type="submit">Add Details</button>
      </form>
    </div>
  );
};

export default Event;
