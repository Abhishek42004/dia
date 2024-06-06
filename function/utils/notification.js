// notification.js
export class Notification {
    constructor() {
        this.injectCSS();
        this.container = this.createContainer();
    }

    injectCSS() {
        const style = document.createElement('style');
        style.innerHTML = `
            #notification-container {
                position: fixed;
                top: 20px;
                right: 20px;
                z-index: 1000;
                display: flex;
                flex-direction: column;
                gap: 10px;
            }
            .notification {
                background-color: #444;
                color: #fff;
                padding: 15px;
                border-radius: 5px;
                box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
                opacity: 0;
                transform: translateY(-20px);
                transition: opacity 0.5s, transform 0.5s;
            }
            .notification.show {
                opacity: 1;
                transform: translateY(0);
            }
            .notification.success {
                background-color: #4caf50;
            }
            .notification.error {
                background-color: #f44336;
            }
            .notification.info {
                background-color: #2196f3;
            }
            .notification.warning {
                background-color: #ff9800;
            }
        `;
        document.head.appendChild(style);
    }

    createContainer() {
        let container = document.getElementById('notification-container');
        if (!container) {
            container = document.createElement('div');
            container.id = 'notification-container';
            document.body.appendChild(container);
        }
        return container;
    }

    createNotification(message, type = 'info', duration = 3000) {
        const notification = document.createElement('div');
        notification.classList.add('notification', type);
        notification.innerText = message;

        this.container.appendChild(notification);

        // Show the notification
        setTimeout(() => {
            notification.classList.add('show');
        }, 10);

        // Remove the notification after the specified duration
        setTimeout(() => {
            this.removeNotification(notification);
        }, duration);
    }

    removeNotification(notification) {
        notification.classList.remove('show');
        notification.addEventListener('transitionend', () => {
            notification.remove();
        });
    }

    success(message, duration) {
        this.createNotification(message, 'success', duration);
    }

    error(message, duration) {
        this.createNotification(message, 'error', duration);
    }

    info(message, duration) {
        this.createNotification(message, 'info', duration);
    }

    warning(message, duration) {
        this.createNotification(message, 'warning', duration);
    }
}


