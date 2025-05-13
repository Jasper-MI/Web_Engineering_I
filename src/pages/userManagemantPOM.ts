import { ApplicationManager } from "../ApplicationManager.js";
import { ImpresssumPOM } from "./impressumPOM.js";
import { LandingPagePOM } from "./landingPagePOM.js";
import { StartingPagePOM } from "./startingPagePOM.js";
//import  { UserManagemantPOM } from "./userManagemantPOM.js";

export class UserManagemantPOM {
        public async init(): Promise<void> {

        const appContent = document.getElementById('appContent') as HTMLElement;

        try {
            const response = await fetch('./html/userManagement.html',); 
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const htmlContent = await response.text();

            if (appContent) {
                appContent.innerHTML = '';
                appContent.innerHTML = htmlContent;
            } else {
                console.error(`Container with id=appContent not found.`);
            }
        } catch (error) {
            console.error('Failed to load Impressum:', error);
        }

        // DOM-Elemente 
        const linkBackToStartingPage = document.getElementById('LinkRoot');
        const linkImpressum = document.getElementById('LinkImpressum');
        const linkUserManagemant = document.getElementById('LinkUserManagemant');
        const logoutButton = document.getElementById('LinkLogout') as HTMLElement;

        // Event Listener hinzufügen
        linkBackToStartingPage?.addEventListener('click', (event) => {
            event.preventDefault();
            const landingPagePOM = new LandingPagePOM();
            landingPagePOM.init();
        });

        linkImpressum?.addEventListener('click', (event) => {
            event.preventDefault();
            const impressumPOM = new ImpresssumPOM();
            impressumPOM.init();
        });

        linkUserManagemant?.addEventListener('click', (event) => {
            event.preventDefault();
            const userManagemantPOM = new UserManagemantPOM();
            userManagemantPOM.init();
        });

        logoutButton.addEventListener('click', async (event) => {
            console.log("logoutButton pressed")
            event.preventDefault();

            const applicationManager = ApplicationManager.getInstance();
            applicationManager.loadLandingPage()
        
        })

    }
}