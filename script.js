function validateCredentials(event) {
  event.preventDefault(); // Prevent form submission

  var emailInput = document.getElementById('email');
  var passwordInput = document.getElementById('pwd');

  var email = emailInput.value;
  var password = passwordInput.value;

  if (email === 'admin@admin.com' && password === '123456') {
      alert('Login successful!');
      // Perform any additional actions or redirect to another page
  } else {
      alert('Incorrect credentials. Please try again.');
      // Clear the input fields
      emailInput.value = '';
      passwordInput.value = '';
  }
}