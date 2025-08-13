document.addEventListener('DOMContentLoaded', () => {
    const splashScreen = document.getElementById('splash-screen');
    const mainContent = document.getElementById('main-content');
    // Function to hide the splash screen
    const hideSplashScreen = () => {
        splashScreen.classList.add('hidden'); // Start fade out
        setTimeout(() => {
            splashScreen.style.display = 'none'; // Completely hide after transition
            document.body.style.overflow = 'auto'; // Restore scrollbars
            mainContent.classList.remove('hidden'); // Show main content
        }, 2000); // Matches CSS transition duration
    };
    // Hide after a set time (e.g., 3 seconds)
    setTimeout(hideSplashScreen, 2000); // Adjust duration as needed
});