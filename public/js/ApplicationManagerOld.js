// User-Class //
class User {
    constructor(userId, userName, password) {
        this.userId = userId;
        this.userName = userName;
        this.password = password;
    }
}
export class ApplicationManger {
    constructor() {
        // creating a hashmap with all users
        this.userMap = new Map();
        this.userId = 0;
    }
    registerUser(userNameInput, passwordInput) {
        this.userMap.forEach((value, key) => {
            if (value.userName === userNameInput && value.password === passwordInput) {
                console.log("User already exists");
                return null;
            }
        });
        const newUser = new User(this.userId++, userNameInput, passwordInput);
        this.userMap.set(newUser.userId, newUser);
        console.log("New user added");
        // Toast muss noch angezeigt werden //
        // eigene Function im ApplicationManager schreiben
        // Funktion nimm zwei Paramter auf: Inhalt der Nachiht; Error oder Success 
        // HTML Code ist in der index.html drin --> von Bootstrap muss classe "hide" entfernt werden
        return newUser;
    }
    logIn(userNameInput, passwordInput) {
    }
}
