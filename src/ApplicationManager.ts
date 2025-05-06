
// User-Class //

class User {
    userId: number;
    userName: string;
    password: string;

    constructor (userId: number, userName: string, password: string) {
        this.userId = userId;
        this.userName = userName;
        this.password = password;
    }
    
}


export class ApplicationManger {

    // creating a hashmap with all users
    userMap = new Map<number, User>();
    
    userId = 0;


    registerUser (userNameInput: string, passwordInput: string) {
        this.userMap.forEach((value: User, key: number) => {
            if( value.userName === userNameInput && value.password === passwordInput) {
                console.log("User already exists");
                return null;
            }
        });

        const newUser: User = new User (
            this.userId++,
            userNameInput,
            passwordInput
        );

        this.userMap.set(newUser.userId, newUser);
        console.log("New user added");

        // Toast muss noch angezeigt werden //
        // eigene Function im ApplicationManager schreiben
        // Funktion nimm zwei Paramter auf: Inhalt der Nachiht; Error oder Success 
        // HTML Code ist in der index.html drin --> von Bootstrap muss classe "hide" entfernt werden

        return newUser;
    }

    logIn(userNameInput: string, passwordInput: string) {
        
    }





}