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
import { LandingPagePOM } from "./landingPagePOM.js";
//import  { UserManagemantPOM } from "./userManagemantPOM.js";
export class UserManagemantPOM {
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            const appContent = document.getElementById('appContent');
            try {
                const response = yield fetch('./html/userManagement.html');
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const htmlContent = yield response.text();
                if (appContent) {
                    appContent.innerHTML = '';
                    appContent.innerHTML = htmlContent;
                }
                else {
                    console.error(`Container with id=appContent not found.`);
                }
            }
            catch (error) {
                console.error('Failed to load Impressum:', error);
            }
            // DOM-Elemente 
            const linkBackToStartingPage = document.getElementById('LinkRoot');
            const linkImpressum = document.getElementById('LinkImpressum');
            const linkUserManagemant = document.getElementById('LinkUserManagemant');
            const logoutButton = document.getElementById('LinkLogout');
            // Event Listener hinzufügen
            linkBackToStartingPage === null || linkBackToStartingPage === void 0 ? void 0 : linkBackToStartingPage.addEventListener('click', (event) => {
                event.preventDefault();
                const landingPagePOM = new LandingPagePOM();
                landingPagePOM.init();
            });
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
            logoutButton.addEventListener('click', (event) => __awaiter(this, void 0, void 0, function* () {
                console.log("logoutButton pressed");
                event.preventDefault();
                const applicationManager = ApplicationManager.getInstance();
                applicationManager.loadLandingPage();
            }));
        });
    }
}
