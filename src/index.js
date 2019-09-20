import task from './project.js';

const defaultProject = task.createNewProject('default');

console.log(task.addTaskToProject(1, 2, 3, 4, defaultProject));

const projectList = [];
projectList[0] = defaultProject;

console.log(projectList);
