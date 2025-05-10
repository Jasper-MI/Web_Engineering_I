import { ApplicationManager } from './ApplicationManager.js';
document.addEventListener('DOMContentLoaded', () => {
    console.log("Application initialized");
    const applicationManager = new ApplicationManager();
    applicationManager.init();
});
