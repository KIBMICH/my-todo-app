"use client"; // Add this directive to make the component a client component

import styled from "styled-components";
import { useState } from "react";

interface TaskFormProps {
  onSubmit: (title: string) => void;
  initialTitle?: string;
}

const TaskForm = ({ onSubmit, initialTitle = "" }: TaskFormProps) => {
  const [title, setTitle] = useState(initialTitle);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      onSubmit(title.trim());
      setTitle("");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Add a task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Button type="submit">Save</Button>
    </Form>
  );
};

export default TaskForm;

const Form = styled.form`
  display: flex;
  margin-bottom: 16px;
`;

const Input = styled.input`
  flex: 1;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-right: 8px;
`;

const Button = styled.button`
  background-color: #0070f3;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
`;
