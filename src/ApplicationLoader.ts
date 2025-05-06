import { ApplicationManger } from './ApplicationManager';

export class ApplicationLoader {
    private static instance: ApplicationManger | null = null;

    public static load(): ApplicationManger {
        if(!ApplicationLoader.instance) {
            ApplicationLoader.instance = new ApplicationManger();
            console.log("ApplicationLoader: ApplicationManager erstellt")
        } else {
            console.log("ApplicationLoader: ApplicationManager schon vorhanden")
        }
        return ApplicationLoader.instance;
    }
}
