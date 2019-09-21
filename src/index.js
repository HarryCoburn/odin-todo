import task from './project.js';
import projectView from './projectView.js';

const defaultProject = task.createNewProject('Default');
const testProject = task.createNewProject('Test');

task.projectList[0] = defaultProject;
task.projectList[1] = testProject;

projectView.projectDropLabel.addEventListener('click', function() {
  projectView.createDropdown(task.projectList);
});
