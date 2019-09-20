import task from './task.js';

// project factory

const projectFactory = name => ({ name, taskList: [] });

const defaultProject = projectFactory('default');

task.addTask('Eat soup', 'Make lots of soup', '9-22', 'High', defaultProject);

const projectList = [];
projectList[0] = defaultProject;

console.log(projectList);
