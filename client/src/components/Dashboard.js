import React from "react";
import Todo from "./Todo";
import { useAuth } from "../context/AuthContext";
const Dashboard = () => {
  const auth = useAuth();
  return (
    <div>
      <Todo />
      <button onClick={() => auth.logout()}>Logout</button>
    </div>
  );
};

export default Dashboard;
