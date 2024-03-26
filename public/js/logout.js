// logout function to sign out the user
const logout = async () => {
    try {
        const response = await fetch('/api/users/logout', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to log out');
        }
    } catch (err) {
        console.error('Error logging out:', err);
        alert('An error occurred while logging out');
    }
};

// Event listener for logout button
const logoutBtn = document.querySelector('#logout-btn');
if (logoutBtn) {
    logoutBtn.addEventListener('click', logout);
}