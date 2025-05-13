var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { ApplicationManager } from "../ApplicationManager.js";
import { ImpresssumPOM } from "./impressumPOM.js";
import { UserManagemantPOM } from "./userManagemantPOM.js";
export class StartingPagePOM {
    constructor(containerId = 'appContent') {
        this.containerId = containerId;
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            const appContent = document.getElementById(this.containerId);
            const applicationManager = ApplicationManager.getInstance(); // Instance of ApplicationManger to make methode calls
            try {
                const response = yield fetch('./html/startingPage.html');
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const htmlContent = yield response.text();
                if (appContent) {
                    appContent.innerHTML = '';
                    appContent.innerHTML = htmlContent;
                    ;
                }
                else {
                    console.error(`Container with id "${this.containerId}" not found.`);
                }
            }
            catch (error) {
                console.error('Failed to load StartingPage:', error);
            }
            // DOM-Elemente abrufen
            const logoutButton = document.getElementById('LinkLogout');
            const userCount = document.getElementById('UserCount');
            const linkImpressum = document.getElementById('LinkImpressum');
            const linkUserManagemant = document.getElementById('LinkUserManagement');
            // Event Listener hinzufügen
            linkImpressum === null || linkImpressum === void 0 ? void 0 : linkImpressum.addEventListener('click', (event) => {
                event.preventDefault();
                const impressumPOM = new ImpresssumPOM();
                impressumPOM.init();
            });
            linkUserManagemant === null || linkUserManagemant === void 0 ? void 0 : linkUserManagemant.addEventListener('click', (event) => {
                event.preventDefault();
                const userManagemantPOM = new UserManagemantPOM();
                userManagemantPOM.init();
            });
            // set UserCount to the correct number
            userCount.innerHTML = applicationManager.getUserNumber();
            logoutButton.addEventListener('click', (event) => __awaiter(this, void 0, void 0, function* () {
                console.log("logoutButton pressed");
                event.preventDefault();
                const applicationManager = ApplicationManager.getInstance();
                applicationManager.loadLandingPage();
            }));
            // return appContent as HTMLElement;
        });
    }
}
