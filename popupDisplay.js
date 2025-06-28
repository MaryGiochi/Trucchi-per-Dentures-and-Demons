/**
 * popupDisplay - Basic Popup Notification System
 * Author: MaryGiochi
 * License: Custom
 */

const popupDisplay = {
    /**
     * Shows a temporary popup message on the screen.
     * @param {string} message - The message to display.
     * @param {number} [duration=3000] - How long the popup stays visible (in milliseconds).
     */
    show(message, duration = 3000) {
        if (typeof message !== 'string' || message.trim() === '') {
            console.error('[popupDisplay] Invalid message.');
            return;
        }

        const popup = document.createElement('div');
        popup.textContent = message;
        popup.style.position = 'fixed';
        popup.style.bottom = '20px';
        popup.style.left = '50%';
        popup.style.transform = 'translateX(-50%)';
        popup.style.backgroundColor = '#333';
        popup.style.color = '#fff';
        popup.style.padding = '10px 20px';
        popup.style.borderRadius = '5px';
        popup.style.boxShadow = '0 2px 6px rgba(0, 0, 0, 0.3)';
        popup.style.fontFamily = 'Arial, sans-serif';
        popup.style.fontSize = '14px';
        popup.style.zIndex = '1000';

        document.body.appendChild(popup);

        setTimeout(() => {
            document.body.removeChild(popup);
        }, duration);
    }
};

// Example usage:
// popupDisplay.show('Level completed!', 2000);

module.exports = popupDisplay;
