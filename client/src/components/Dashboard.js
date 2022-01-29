import React from "react";
import Todo from "./Todo";
import { useAuth } from "../context/AuthContext";
const Dashboard = () => {
  const auth = useAuth();
  return (
    <div>
      <button onClick={() => auth.logout()}>Logout</button>
      <br />
      <br />
      <Todo />
    </div>
  );
};

export default Dashboard;
