const signUp = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#username').value.trim();
    const password = document.querySelector('#password').value.trim();
    const email = document.querySelector('#email').value.trim();

    if (username && password && email) {
        const response = await fetch('/api/users/signup', {
            method: 'POST',
            body: JSON.stringify({ username, password, email }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to complete sign up.');
        }
    }
};

// Event listener for sign up button
const signUpForm = document.querySelector('#signup-form');
if (signUpForm) {
    signUpForm.addEventListener('click', signUp);
}