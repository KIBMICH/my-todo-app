// components/TaskItem.tsx
"use client"; 
import styled from "styled-components";
import { Task } from "../store/taskStore";

interface TaskItemProps {
  task: Task;
  onToggleComplete: () => void;
  onDelete: () => void;
  onEdit: () => void;
}

const TaskItem = ({ task, onToggleComplete, onDelete, onEdit }: TaskItemProps) => {
  return (
    <TaskContainer>
      <TaskTitle completed={task.completed} onClick={onToggleComplete}>
        {task.title}
      </TaskTitle>
      <Actions>
        <button onClick={onEdit}>Edit</button>
        <button onClick={onDelete}>Delete</button>
      </Actions>
    </TaskContainer>
  );
};

export default TaskItem;

const TaskContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  padding: 8px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const TaskTitle = styled.div<{ completed: boolean }>`
  text-decoration: ${({ completed }) => (completed ? "line-through" : "none")};
  cursor: pointer;
`;

const Actions = styled.div`
  button {
    margin-left: 8px;
    background: none;
    border: none;
    color: #0070f3;
    cursor: pointer;
  }
`;
