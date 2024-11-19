// app/page.tsx
"use client"; 
import TaskItem from "../components/TaskItem";
import TaskForm from "../components/TaskForm";
import { useTaskStore } from "../store/taskStore";
import styled from "styled-components";

const Home = () => {
  const { tasks, addTask, updateTask, toggleTaskCompletion, deleteTask } =
    useTaskStore();

  const handleAddTask = (title: string) => {
    addTask({ id: Date.now().toString(), title, completed: false });
  };

  return (
    <Container>
      <Header>Todo App</Header>
      <TaskForm onSubmit={handleAddTask} />
      <TaskList>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggleComplete={() => toggleTaskCompletion(task.id)}
            onDelete={() => deleteTask(task.id)}
            onEdit={() => {
              const newTitle = prompt("Edit Task", task.title);
              if (newTitle) updateTask(task.id, newTitle);
            }}
          />
        ))}
      </TaskList>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  padding: 16px;
  max-width: 600px;
  margin: 0 auto;
`;

const Header = styled.h1`
  text-align: center;
  margin-bottom: 16px;
`;

const TaskList = styled.div`
  margin-top: 16px;
`;
