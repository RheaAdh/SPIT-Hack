import React from "react";
import Todo from "./Todo";
import Expense from "./Expense";
import Period from "./Period";
import Event from "./Event";
import { useAuth } from "../context/AuthContext";
import SpotifyLoginComp from "./SpotifyLoginComp";
import Socials from "./Socials";
import Music from "./Music";
import News from "./News.js";
import { TOKEN_ID } from "../utils/constants";
// import Slider from "./Slider";

const Dashboard = () => {
  const auth = useAuth();
  return (
    <div className="dashboard">
      <Socials />
      <Expense />
      <Todo />
      <Event />
      <Period />
      <News />

      {/* <Slider /> */}
      <br />
    </div>
  );
};

export default Dashboard;
