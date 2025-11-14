// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  const loginForm = document.getElementById('login-form');
  const loginError = document.getElementById('login-error');

  loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    // Reset error message
    loginError.textContent = '';

    // Simulate hashing
    const hashedPassword = btoa(password);

    // Simulate checking user (in a real app, send to server)
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.username === username && u.password === hashedPassword);

    if (user) {
      alert("Login successful!");
      loginForm.reset();
      // Redirect or set session here
    } else {
      loginError.textContent = "Invalid username or password!";
    }
  });
});