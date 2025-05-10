var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { StartingPage } from "./pages/startingPage.js";
export class ApplicationManager {
    constructor() {
        this.formLogin = null;
        this.formSignup = null;
        this.linkShowSignupDialog = null;
        this.linkShowLoginDialog = null;
        this.buttonSignupUser = null;
        this.buttonLoginUser = null;
        this.userMap = new Map();
        this.userId = 0;
    }
    init() {
        var _a, _b, _c, _d;
        console.log("Application Manager initialized");
        // DOM-Elemente abrufen
        this.formLogin = document.getElementById('FormLogin');
        this.formSignup = document.getElementById('FormSignup');
        this.linkShowSignupDialog = document.getElementById('LinkShowSignupDialog');
        this.linkShowLoginDialog = document.getElementById('LinkShowLoginDialog');
        this.buttonSignupUser = document.getElementById('ButtonSignupUser');
        this.buttonLoginUser = document.getElementById('ButtonLoginUser');
        // Event Listener hinzufügen
        (_a = this.linkShowSignupDialog) === null || _a === void 0 ? void 0 : _a.addEventListener('click', (event) => {
            event.preventDefault();
            if (this.formLogin && this.formSignup) {
                this.formLogin.style.display = 'none';
                this.formSignup.style.display = 'block';
            }
        });
        // Event Listener hinzufügen
        (_b = this.linkShowLoginDialog) === null || _b === void 0 ? void 0 : _b.addEventListener('click', (event) => {
            event.preventDefault();
            if (this.formLogin && this.formSignup) {
                this.formLogin.style.display = 'block';
                this.formSignup.style.display = 'none';
            }
        });
        // Button --> Signup new user
        (_c = this.formSignup) === null || _c === void 0 ? void 0 : _c.addEventListener('submit', (event) => {
            event.preventDefault();
            const userNameInput = document.getElementById('FormSignupUsername').value;
            const passwordInput = document.getElementById('FormSignupPassword').value;
            this.signupUser(userNameInput, passwordInput);
            // Switch to login form after registration
            if (this.formLogin && this.formSignup) {
                this.formLogin.style.display = 'block';
                this.formSignup.style.display = 'none';
            }
        });
        // Button --> Login existing user
        (_d = this.formLogin) === null || _d === void 0 ? void 0 : _d.addEventListener('submit', (event) => __awaiter(this, void 0, void 0, function* () {
            event.preventDefault();
            const userNameInput = document.getElementById('FormLoginUsername').value;
            const passwordInput = document.getElementById('FormLoginPassword').value;
            // Log the user in --> Check if the name and password are correct
            var checkUser = this.login(userNameInput, passwordInput);
            if (!checkUser) {
                console.log("Wrong username or password");
                return null;
            }
            // Then show the starting page
            // First clear the current page
            const appContent = document.getElementById('appContent');
            if (appContent) {
                const startingPage = new StartingPage(); // Create a new instance of StartingPage
                appContent.innerHTML = ''; // Clear the current content
                appContent.appendChild(yield startingPage.render()); // Append the new content
            }
        }));
    }
    // Methode --> Signup new user
    signupUser(userNameInput, passwordInput) {
        if (!userNameInput || !passwordInput) {
            console.log("Please fill in all fields");
            return null;
        }
        for (const user of this.userMap.values()) {
            if (user.userName === userNameInput) {
                console.log("User already exists");
                return null;
            }
        }
        const newUser = new User(this.userId++, userNameInput, passwordInput);
        this.userMap.set(newUser.userId, newUser);
        console.log("New user added");
        console.log(this.userMap);
        return newUser;
    }
    // Methode --> Login existing user 
    login(userNameInput, passwordInput) {
        for (const user of this.userMap.values()) {
            if (user.userName === userNameInput && user.password === passwordInput) {
                console.log("User logged in successfully");
                return user;
            }
            else {
                return null;
            }
        }
    }
}
// User-Class //
class User {
    constructor(userId, userName, password) {
        this.userId = userId;
        this.userName = userName;
        this.password = password;
    }
}
