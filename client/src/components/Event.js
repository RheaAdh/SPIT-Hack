import React, { useEffect } from "react";
import axios from "axios";
import { TOKEN_ID } from "../utils/constants";

const Event = () => {
  const [eventDate, setEventDate] = React.useState(new Date());
  const [eventType, setEventType] = React.useState("");
  const [eventDetails, setEventDetails] = React.useState([]);

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
  };
  const getDetails = async () => {
    const res = await axios.get("http://localhost:5000/api/event", {
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": localStorage.getItem(TOKEN_ID),
      },
    });

    setEventDetails(res.data.data);
  };
  useEffect(() => {
    getDetails();
  }, []);

  return (
    <div className="eventReminder">
      <form onSubmit={handleSubmit} className="eventForm">
        <input
          style={{ width: "15rem", height: "2rem", marginBottom: "2rem" }}
          type="text"
          id="eventName"
          placeholder="Name of the event"
          onChange={(e) => setEventType(e.target.value)}
        ></input>
        <input
          type="date"
          style={{ width: "10rem", height: "2rem", marginBottom: "2rem" }}
          id="reminderDate"
          placeholder="date"
          onChange={(e) => setEventDate(e.target.value)}
        ></input>

        <input
          type="submit"
          id="eventSubmit"
          placeholder="+"
          style={{ width: "5rem", height: "2rem", marginBottom: "2rem" }}
        />
      </form>
      <div class="eventList">
        {eventDetails ? (
          eventDetails.map((data) => (
            <p>
              <span class="eventDate">{data.eventDate}:&nbsp;</span>
              {data.eventType}
            </p>
          ))
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default Event;
