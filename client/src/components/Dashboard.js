import React from "react";
import Todo from "./Todo";
import Expense from "./Expense";
import Period from "./Period";
import Event from "./Event";
import { useAuth } from "../context/AuthContext";
import SpotifyLoginComp from "./SpotifyLoginComp";
const Dashboard = () => {
  const auth = useAuth();
  return (
    <div className="dashboard">
      <button onClick={() => auth.logout()}>Logout</button>
      <SpotifyLoginComp />
      <Event />
      <br />
      <Period />
      <br />
      <Expense />
      <br />
      <Todo />
    </div>
  );
};

export default Dashboard;
