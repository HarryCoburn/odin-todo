import task from './project.js';
import { taskContent } from './initialView.js';

const taskView = (() => {
  const newTaskDiv = document.createElement('div');
  const displayTasks = project => {
    const projectData = task.projectList.find(item => item.name === project);
    if (projectData.taskList.length === 0) {
      newTaskDiv.innerHTML = `No tasks for this project.`;
    }
    taskContent.append(newTaskDiv);
  };

  const clearTaskDisplay = () => {
    taskContent.innerHTML = '';
  };
  return {
    displayTasks,
    clearTaskDisplay,
  };
})();

export default taskView;
