export class StartingPage {
    private containerId: string;

    constructor(containerId: string = 'appContent') {
        this.containerId = containerId;
    }

    public async render(): Promise<HTMLElement> {
        const container = document.getElementById(this.containerId);
        try {
            const response = await fetch('./html/startingPage.html',); 
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const htmlContent = await response.text();

            if (container) {
                container.innerHTML = htmlContent;;
            } else {
                console.error(`Container with id "${this.containerId}" not found.`);
            }
        } catch (error) {
            console.error('Failed to load StartingPage:', error);
        }

        return container as HTMLElement;
    }
}
