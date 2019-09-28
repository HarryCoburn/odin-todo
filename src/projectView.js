import { header } from './initialView.js';
import taskView from './taskView.js';

const projectView = (() => {
  const projectLabel = document.createElement('div');
  projectLabel.textContent = 'Current Project:';
  const projectDropLabel = document.createElement('label');
  projectDropLabel.id = 'currProject';
  projectDropLabel.textContent = 'All';
  projectDropLabel.setAttribute('data-currProject', '');
  header.append(projectLabel, projectDropLabel);

  const setProject = project => {
    document
      .querySelector('label#currProject')
      .setAttribute('data-currProject', project);
    document.querySelector('label#currProject').textContent = project;
    document.querySelector('.projectDrop').remove();
    taskView.displayTasks(project);
  };

  const displayDropdown = dropdown => {
    taskView.clearTaskDisplay();
    header.appendChild(dropdown);
  };

  const createDropdown = projects => {
    if (document.querySelector('.projectDrop')) return;
    const projectNames = projects.map(project => project.name);
    const projectDropList = document.createElement('ul');
    projectDropList.classList.add('nobull', 'projectDrop');
    projectNames.forEach(item => {
      const currItem = document.createElement('li');
      currItem.textContent = item;
      currItem.addEventListener('click', function() {
        setProject(item);
      });
      projectDropList.appendChild(currItem);
    });
    displayDropdown(projectDropList);
  };

  return {
    createDropdown,
    projectDropLabel,
  };
})();

export default projectView;
