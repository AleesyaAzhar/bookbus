document.addEventListener('DOMContentLoaded', function() {
  const signupForm = document.getElementById('signup-form');

  signupForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const password = document.getElementById('signup-password').value;
    const confirm = document.getElementById('signup-confirm').value;

    if (password !== confirm) {
      alert("Passwords do not match!");
      return;
    }

    // If validation passes, show success and redirect
    alert("Sign up successful! Redirecting to login...");
    // Redirect to login page
    window.location.href = 'index.html';
  });
});
