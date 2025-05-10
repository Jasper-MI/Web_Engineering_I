var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class StartingPage {
    constructor(containerId = 'appContent') {
        this.containerId = containerId;
    }
    render() {
        return __awaiter(this, void 0, void 0, function* () {
            const container = document.getElementById(this.containerId);
            try {
                const response = yield fetch('./html/startingPage.html');
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const htmlContent = yield response.text();
                if (container) {
                    container.innerHTML = htmlContent;
                    ;
                }
                else {
                    console.error(`Container with id "${this.containerId}" not found.`);
                }
            }
            catch (error) {
                console.error('Failed to load StartingPage:', error);
            }
            return container;
        });
    }
}
