import React from "react";
import Todo from "./Todo";
import Expense from "./Expense";
import Period from "./Period";
import Event from "./Event";
import { useAuth } from "../context/AuthContext";
import SpotifyLoginComp from "./SpotifyLoginComp";
import Socials from "./Socials";
const Dashboard = () => {
  const auth = useAuth();
  return (
    <div className="dashboard">
      <button onClick={() => auth.logout()}>Logout</button>
      <Socials />
      <SpotifyLoginComp />
      <Event />
      <Period />
      <Expense />
      <Todo />
    </div>
  );
};

export default Dashboard;
