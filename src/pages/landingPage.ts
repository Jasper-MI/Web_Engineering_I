export class LandingPage {

    init() {
        const registerButton = document.getElementById('registerButton') as HTMLButtonElement;
        const loginButton = document.getElementById('loginButton') as HTMLButtonElement;
        const registerForm = document.getElementById('registerForm') as HTMLFormElement;
        const loginForm = document.getElementById('loginForm') as HTMLFormElement;
        const errorMessage = document.getElementById('errorMessage') as HTMLDivElement;
        const successMessage = document.getElementById('successMessage') as HTMLDivElement;

        registerButton.addEventListener('click', (event) => {
            event.preventDefault();
            this.handleRegister(registerForm, errorMessage, successMessage);
        });

        loginButton.addEventListener('click', (event) => {
            event.preventDefault();
            this.handleLogin(loginForm, errorMessage, successMessage);
        });
    }

    

    handleRegister(form: HTMLFormElement, errorMessage: HTMLDivElement, successMessage: HTMLDivElement) {
        // Handle registration logic here
        console.log("Registering user...");
    }

    handleLogin(form: HTMLFormElement, errorMessage: HTMLDivElement, successMessage: HTMLDivElement) {
        // Handle login logic here
        console.log("Logging in user...");
    }

}