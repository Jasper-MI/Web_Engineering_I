var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { LandingPagePOM } from "./pages/landingPagePOM.js";
import { StartingPagePOM } from "./pages/startingPagePOM.js";
export class ApplicationManager {
    //private userId: number = 0;
    constructor() {
        this.toastMessage = null;
        this.toastMessageText = null;
        this.userMap = new Map();
        console.log("ApplicationManager constructor aufgerufen");
    }
    static getInstance() {
        if (!ApplicationManager.instance) {
            ApplicationManager.instance = new ApplicationManager();
        }
        return ApplicationManager.instance;
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Application Manager initialized");
            this.toastMessage = document.getElementById('toastMessage');
            this.toastMessageText = document.getElementById('toastMessageText');
            // standard admin user
            const adminUser = new User("admin", "Manfred", "Mustermann", "123");
            this.userMap.set(adminUser.userId, adminUser);
            yield this.loadLandingPage();
        });
    }
    // Loading Pages //
    loadLandingPage() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('LandingPage is loading');
            const landingPage = new LandingPagePOM();
            yield landingPage.init();
        });
    }
    loadStartPage() {
        const startingPage = new StartingPagePOM();
        startingPage.init();
    }
    // Methode --> Signup new user
    signupUser(useridInput, firstNameInput, lastNameInput, passwordInput) {
        if (!useridInput || !passwordInput) {
            console.log("Please fill in all fields");
            return null;
        }
        for (const user of this.userMap.values()) {
            if (user.userId === useridInput) {
                console.log("User already exists");
                return null;
            }
        }
        const newUser = new User(useridInput, firstNameInput, lastNameInput, passwordInput);
        this.userMap.set(newUser.userId, newUser);
        console.log("New user added");
        console.log(this.userMap);
        return newUser;
    }
    // Methode --> Login existing user 
    login(useridInput, passwordInput) {
        for (const user of this.userMap.values()) {
            if (user.userId === useridInput && user.password === passwordInput) {
                console.log("User logged in successfully");
                return user;
            }
            else {
                continue;
            }
        }
        return null;
    }
    // Methode --> show toast message
    showToast(message, color) {
        if (this.toastMessage && this.toastMessageText) {
            this.toastMessageText.innerHTML = message;
            this.toastMessage.style.backgroundColor = color;
            this.toastMessage.style.display = 'block';
            console.log(message + color);
            setTimeout(() => {
                this.toastMessage.style.display = "none";
            }, 3000);
        }
    }
    getUserNumber() {
        return ApplicationManager.getInstance().userMap.size.toString();
    }
}
// User-Class //
class User {
    constructor(userId, firstName, lastName, password) {
        this.userId = userId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = password;
    }
}
