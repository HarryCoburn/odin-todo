!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t);var n=(e,t,r,n)=>({title:e,description:t,dueDate:r,priority:n});var o={projectList:[],addTaskToProject:(e,t,r,o,c)=>c.taskList.unshift(n(e,t,r,o)),createNewProject:e=>(e=>({name:e,taskList:[]}))(e)};const c=document.createElement("div");c.id="header";const a=document.createElement("div");a.id="taskContent",document.querySelector("div#content").append(c,a);var u={displayTasks:e=>{const t=o.projectList.find(t=>t.name===e),r=document.createElement("div");0===t.taskList.length&&(console.log("Got here"),r.innerHTML="No tasks for this project."),a.append(r)}};var i=(()=>{const e=document.createElement("label");e.id="currProject",e.textContent="Select Project",e.setAttribute("data-currProject",""),c.appendChild(e);return{createDropdown:e=>{if(document.querySelector(".projectDrop"))return;const t=e.map(e=>e.name),r=document.createElement("ul");r.classList.add("nobull","projectDrop"),t.forEach(e=>{const t=document.createElement("li");t.textContent=e,t.addEventListener("click",(function(){var t;t=e,document.querySelector("label#currProject").setAttribute("data-currProject",t),document.querySelector("label#currProject").textContent=t,document.querySelector(".projectDrop").remove(),u.displayTasks(t)})),r.appendChild(t)}),(e=>{c.appendChild(e)})(r)},projectDropLabel:e}})();const l=o.createNewProject("Default"),d=o.createNewProject("Test");o.projectList[0]=l,o.projectList[1]=d,i.projectDropLabel.addEventListener("click",(function(){i.createDropdown(o.projectList)}))}]);