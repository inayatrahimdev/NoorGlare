// Handle Google Sign-In (Add your own Google Client ID and configuration)
function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId());
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail());
    
    // You can send this information to your server for authentication
  }
  
  // Handle form submission
  document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
    
    // Get form data
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Simple validation (example)
    if (username && password) {
      console.log('Username:', username);
      console.log('Password:', password);
      
      // You can send the credentials to your server for authentication
      // For example: 
      // fetch('/login', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json'
      //   },
      //   body: JSON.stringify({ username, password })
      // }).then(response => response.json())
      //   .then(data => console.log(data))
      //   .catch(error => console.error('Error:', error));
    } else {
      alert('Please fill in both fields');
    }
  });
  