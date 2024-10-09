document.addEventListener('DOMContentLoaded', function() {
  // Register
  document.getElementById('register-form').addEventListener('submit', async (e) => {
      e.preventDefault();

      const username = document.getElementById('register-username').value;
      const password = document.getElementById('register-password').value;

      try {
          const response = await fetch('/register', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({ username, password }),
          });

          const result = await response.json();
          console.log('Response status:', response.status);
          console.log('Response body:', result);

          if (response.ok) {
              alert('Registration successful, logging in');
              window.location.href = '/StudentsPortal.html';
          } else {
              alert(result.message);
          }
      } catch (error) {
          console.error('Error:', error);
          alert('An error occurred. Please try again.');
      }
  });

  // Login
  document.getElementById('login-form').addEventListener('submit', async (event) => {
      event.preventDefault();

      const username = document.getElementById('login-username').value;
      const password = document.getElementById('login-password').value;

      try {
          const response = await fetch('/login', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({ username, password })
          });

          const data = await response.json(); // Ensure response is parsed as JSON

          if (response.ok) {
              window.location.href = '/StudentsPortal.html';
          } else {
              alert(data.message || 'Login failed');
          }
      } catch (error) {
          console.error('Error logging in:', error);
          alert('Internal server error');
      }
  });
  

});
