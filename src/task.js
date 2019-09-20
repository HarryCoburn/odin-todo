// list item factory

const taskFactory = (title, description, dueDate, priority) => ({
  title,
  description,
  dueDate,
  priority,
});

// list item functions

const task = (() => {
  const addTask = (title, description, dueDate, priority, project) =>
    project.taskList.unshift(
      taskFactory(title, description, dueDate, priority)
    );
  return {
    addTask,
  };
})();

export default task;
