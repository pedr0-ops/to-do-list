import React, { useState } from "react";
import * as S from "./App.style";
import Header from "./components/Header/Header";
import { ITask } from "./common/types";
import Task from "./components/Task/Task";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  const [search, setSearch] = useState<string>("");
  const [tasks, setTasks] = useState<ITask[]>([
    {
      id: 1,
      title: "Deploy App",
      completed: false,
    },
    {
      id: 2,
      title: "Change color home screem ",
      completed: true,
    },
  ]);

  const setCompleted = (id: number, completed: boolean) => {
    const newTasks = tasks.map((task: ITask) => {
      return task.id === id ? { ...task, completed } : task;
    });

    setTasks(newTasks);
  };

  const onSearch = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && search !== "") {
      setTasks((prevState) => [
        ...prevState,
        { id: tasks.length + 1, title: search, completed: false },
      ]);
      setSearch("");
    }
  };

  const onDelete = (taskId: number) => {
    const tasksupdated = tasks.filter((task: ITask) => task.id !== taskId);

    setTasks(tasksupdated);
  };

  return (
    <S.AppContainer>
      <Header />
      <SearchBar
        placeholder="Add task..."
        search={search}
        setSearch={setSearch}
        onSearch={onSearch}
      />
      {tasks.map((task: ITask) => (
        <Task
          key={task.id}
          {...task}
          setCompleted={setCompleted}
          onDelete={onDelete}
        />
      ))}
    </S.AppContainer>
  );
}

export default App;
