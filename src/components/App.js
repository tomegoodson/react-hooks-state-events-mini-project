import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS as initialTasks } from "../data";

function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const deleteTask = (taskText) => {
    setTasks(tasks.filter(task => task.text !== taskText));
  };

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const getFilteredTasks = () => {
    return tasks.filter(task => selectedCategory === 'All' || task.category === selectedCategory);
  };

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onCategorySelect={handleCategorySelect}
      />
      <NewTaskForm
        categories={CATEGORIES.filter(category => category !== 'All')}
        onTaskFormSubmit={addTask}
      />
      <TaskList
        tasks={getFilteredTasks()}
        onDeleteTask={deleteTask}
      />
    </div>
  );
}

export default App;
