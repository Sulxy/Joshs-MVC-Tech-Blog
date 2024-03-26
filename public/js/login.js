// Handles the login form submission
const loginForm = async (event) => {
    event.preventDefault();

    // Collect values from the login form
    const username = document.querySelector('#signup-username-login').value.trim();
    const password = document.querySelector('#signup-password-login').value.trim();

    if (username && password) {
        // Send a POST request to the API endpoint
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            // If successful, redirect the browser to the dashboard page
            document.location.replace('/');
        } else {
            alert('Failed to log in');
        }
    }
};

// Event listener for login button
const loginBtn = document.querySelector('.user-login-form');

if (loginBtn) {
    loginBtn.addEventListener('submit', loginForm);
}