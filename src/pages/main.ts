
import { LandingPage } from './landingPage';
import { StartingPage } from './startingPage';

const htmlRoot = document.getElementById('LandingPage')!;

function renderPage(page: HTMLElement) {
    htmlRoot.innerHTML = ""; // Seite leeren
    htmlRoot.appendChild(page);
  }
  
  function startApp() {
    const loginPage = new LandingPage();
  
    renderPage(loginPage.render());
  }
  
  startApp();