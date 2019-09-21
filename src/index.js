import task from './project.js';
import projectView from './projectView.js';

const defaultProject = task.createNewProject('Default');
const testProject = task.createNewProject('Test');

const projectList = [];
projectList[0] = defaultProject;
projectList[1] = testProject;

const header = document.createElement('div');
header.id = 'header';
document.querySelector('div#content').appendChild(header);

const projectDropLabel = document.createElement('label');
projectDropLabel.id = 'currProject';
projectDropLabel.textContent = 'Select Project';
projectDropLabel.setAttribute('data-currProject', '');
header.appendChild(projectDropLabel);

projectDropLabel.addEventListener('click', function() {
  projectView.createDropdown(projectList);
});
