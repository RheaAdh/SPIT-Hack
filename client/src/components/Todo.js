import React from "react";
import Tasks from "./Tasks";

class Todo extends Tasks {
  state = { tasks: [], currentTask: "" };

  render() {
    const { tasks } = this.state;
    return (
      <div className="toDoList">
        <form onSubmit={this.handleSubmit}>
          <input
            size="small"
            style={{
              borderRadius: "0.15rem",
              height: "2rem",
              width: "80%",
              padding: "0.5rem",
              color: "white",
              backgroundColor: "#384147",
            }}
            value={this.state.currentTask}
            required={true}
            onChange={this.handleChange}
            placeholder="ADD TASK"
          />
          <button
            type="submit"
            type="submit"
            id="expenseSubmit"
            value="+"
            style={{
              borderRadius: "40px",
              marginLeft: "1rem",
              color: "white",
              fontWeight: "bold",
              backgroundColor: "#384147",
            }}
          >
            +
          </button>
        </form>
        <div className="task-list">
          {tasks.map((task) => (
            <div key={task._id} className="uhh" style={{ padding: "0.25rem" }}>
              <span style={{ fontSize: "3rem" }}>
                <input
                  type="checkbox"
                  checked={task.completed}
                  onClick={() => this.handleUpdate(task._id)}
                />
              </span>

              <div className={task.completed ? "task line_through" : "task"}>
                {task.task}
              </div>

              <button
                id="icons"
                className="fa fa-trash"
                onClick={() => this.handleDelete(task._id)}
                style={{ backgroundColor: "#192225" }}
              ></button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Todo;
