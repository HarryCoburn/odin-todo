import { header } from './initialView.js';

const projectView = (() => {
  const projectDropLabel = document.createElement('label');
  projectDropLabel.id = 'currProject';
  projectDropLabel.textContent = 'Select Project';
  projectDropLabel.setAttribute('data-currProject', '');
  header.appendChild(projectDropLabel);

  const setProject = project => {
    document
      .querySelector('label#currProject')
      .setAttribute('data-currProject', project);
    document.querySelector('label#currProject').textContent = project;
    document.querySelector('.projectDrop').remove();
  };

  const displayDropdown = dropdown => {
    const header = document.querySelector('div#header');
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
