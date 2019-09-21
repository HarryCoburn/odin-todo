import task from './project.js';
import { taskContent } from './initialView.js';

const taskView = (() => {
  const displayTasks = project => {
    const projectData = task.projectList.find(item => item.name === project);
    const newTaskDiv = document.createElement('div');
    if (projectData.taskList.length === 0) {
      console.log('Got here');
      newTaskDiv.innerHTML = `No tasks for this project.`;
    }
    taskContent.append(newTaskDiv);
  };
  return {
    displayTasks,
  };
})();

export default taskView;
