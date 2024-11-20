"use client";
import TaskItem from "../components/TaskItem";
import TaskForm from "../components/TaskForm";
import { useTaskStore } from "../store/taskStore";
import styled from "styled-components";

const Home = () => {
  const {
    tasks,
    addTask,
    updateTask,
    toggleTaskCompletion,
    deleteTask,
    addSubtask,
    toggleSubtask,
    startTask,
    endTask,
  } = useTaskStore();

  const handleAddTask = (title: string, dueDate?: string) => {
    addTask({
      id: Date.now().toString(),
      title,
      completed: false,
      inProgress: false,
      dueDate: dueDate || null,
      subtasks: [],
    });
  };

  return (
    <Container>
      <Header>Todo App</Header>
      <TaskForm onSubmit={handleAddTask} />
      <TaskList>
        {tasks.map((task, index) => (
          <TaskItem
            key={task.id}
            task={task}
            taskNumber={index + 1} // Displaying task number (index + 1)
            isOverdue={task.dueDate ? new Date(task.dueDate) < new Date() && !task.completed : false}
            onStartTask={() => startTask(task.id)}
            onEndTask={() => endTask(task.id)}
            onToggleComplete={() => toggleTaskCompletion(task.id)}
            onDelete={() => deleteTask(task.id)}
            onEdit={() => {
              const newTitle = prompt("Edit Task", task.title);
              if (newTitle) updateTask(task.id, newTitle);
            }}
            onAddSubtask={(subtask) => addSubtask(task.id, subtask)}
            onToggleSubtask={(subtaskId) => toggleSubtask(task.id, subtaskId)}
          />
        ))}
      </TaskList>
    </Container>
  );
};

export default Home;

/* Styled Components */
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
