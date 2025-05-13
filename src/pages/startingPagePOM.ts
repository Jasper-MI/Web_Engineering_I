import { ApplicationManager } from "../ApplicationManager.js";
import { LandingPagePOM } from "./landingPagePOM.js";
import { ImpresssumPOM } from "./impressumPOM.js";
import { UserManagemantPOM } from "./userManagemantPOM.js";

export class StartingPagePOM {
    private containerId: string;

    constructor(containerId: string = 'appContent') {
        this.containerId = containerId;
    }

    public async init(): Promise<void> {
        const appContent = document.getElementById(this.containerId);
        const applicationManager = ApplicationManager.getInstance(); // Instance of ApplicationManger to make methode calls
        
        try {
            const response = await fetch('./html/startingPage.html',); 
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            
            const htmlContent = await response.text();
            
            if (appContent) {
                appContent.innerHTML = '';
                appContent.innerHTML = htmlContent;;
            } else {
                console.error(`Container with id "${this.containerId}" not found.`);
            }
        } catch (error) {
            console.error('Failed to load StartingPage:', error);
        }

        // DOM-Elemente abrufen
        const logoutButton = document.getElementById('LinkLogout') as HTMLElement;
        const userCount = document.getElementById('UserCount') as HTMLSpanElement;
        const linkImpressum = document.getElementById('LinkImpressum') as HTMLAnchorElement;
        const linkUserManagemant = document.getElementById('LinkUserManagement') as HTMLAnchorElement;

        // Event Listener hinzufügen
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

        // set UserCount to the correct number
        userCount.innerHTML = applicationManager.getUserNumber();

        logoutButton.addEventListener('click', async (event) => {
            console.log("logoutButton pressed")
            event.preventDefault();

            const applicationManager = ApplicationManager.getInstance();
            applicationManager.loadLandingPage()
        
        })



        // return appContent as HTMLElement;
    }
}
