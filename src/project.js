import taskFactory from './task.js';

// project factory

const projectFactory = name => ({ name, taskList: [] });

// list item functions

const task = (() => {
  const projectList = [];
  const addTaskToProject = (title, description, dueDate, priority, project) =>
    project.taskList.unshift(
      taskFactory(title, description, dueDate, priority)
    );

  const createNewProject = name => projectFactory(name);
  return {
    projectList,
    addTaskToProject,
    createNewProject,
  };
})();

export default task;
