const header = document.createElement('div');
header.id = 'header';

const taskContent = document.createElement('div');
taskContent.id = 'taskContent';

document.querySelector('div#content').append(header, taskContent);

export { header, taskContent };
