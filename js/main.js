import { loadProjects } from './modules/projects.js';
import { initContactForm } from './modules/contact.js';

document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
    initContactForm();
});