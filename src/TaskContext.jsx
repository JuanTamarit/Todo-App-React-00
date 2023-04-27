import React from "react";

const TaskContext = React.createContext({
  tasksArray: [],
  setTasksArray: () => {},
});

export default TaskContext;
