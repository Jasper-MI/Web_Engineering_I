export class LandingPage {
    init() {
        const registerButton = document.getElementById('registerButton');
        const loginButton = document.getElementById('loginButton');
        const registerForm = document.getElementById('registerForm');
        const loginForm = document.getElementById('loginForm');
        const errorMessage = document.getElementById('errorMessage');
        const successMessage = document.getElementById('successMessage');
        registerButton.addEventListener('click', (event) => {
            event.preventDefault();
            this.handleRegister(registerForm, errorMessage, successMessage);
        });
        loginButton.addEventListener('click', (event) => {
            event.preventDefault();
            this.handleLogin(loginForm, errorMessage, successMessage);
        });
    }
    handleRegister(form, errorMessage, successMessage) {
        // Handle registration logic here
        console.log("Registering user...");
    }
    handleLogin(form, errorMessage, successMessage) {
        // Handle login logic here
        console.log("Logging in user...");
    }
}
