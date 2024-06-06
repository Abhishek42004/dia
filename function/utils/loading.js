export class LoaderPlugin {
    constructor() {
        this.createLoader();
    }

    createLoader() {
        // Create the loader element
        this.loader = document.createElement('div');
        this.loader.id = 'loader';
        this.loader.className = 'loader';

        // Create the style element
        const style = document.createElement('style');
        style.textContent = `
            .loader {
                display: none;
                position: fixed;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                border: 16px solid #f3f3f3;
                border-radius: 50%;
                border-top: 16px solid #3498db;
                width: 120px;
                height: 120px;
                animation: spin 2s linear infinite;
                z-index: 1000;
            }
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
        `;

        // Append the loader and style to the document body
        document.head.appendChild(style);
        document.body.appendChild(this.loader);
    }

    startLoading() {
        this.loader.style.display = 'block';
    }

    stopLoading() {
        this.loader.style.display = 'none';
    }
}

