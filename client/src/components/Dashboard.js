import React from "react";
import Todo from "./Todo";
import Expense from "./Expense";
import { useAuth } from "../context/AuthContext";
const Dashboard = () => {
  const auth = useAuth();
  return (
    <div>
      <button onClick={() => auth.logout()}>Logout</button>
      <br />
      <Expense />
      <br />
      <Todo />
    </div>
  );
};

export default Dashboard;
