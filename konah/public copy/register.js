document.getElementById('register-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;
    const email = document.getElementById('register-email').value;
    const stream = document.getElementById('stream').value;
    const subjects = document.getElementById('subjects').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;

    try {
        const response = await fetch('/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password, email, stream, subjects, phone, address }),
        });

        const result = await response.json();

        if (response.ok) {
            alert('Registration successful');
            window.location.href = '/login.html'; // Redirect to login page
        } else {
            alert(result.message);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    }
});
