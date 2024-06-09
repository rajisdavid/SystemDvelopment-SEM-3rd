

// Toggle between login and register forms
function login() {
    document.getElementById('login').style.display = 'block';
    document.getElementById('register').style.display = 'none';
    document.getElementById('login-error').style.display = 'none'; // Hide error message
}

function register() {
    document.getElementById('login').style.display = 'none';
    document.getElementById('register').style.display = 'block';
    document.getElementById('register-error').style.display = 'none'; // Hide error message
}

// Mock user database
const users = [];

// Register user function
function registerUser() {
    const firstname = document.getElementById('register-firstname').value;
    const lastname = document.getElementById('register-lastname').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;

    if (firstname && lastname && email && password) {
        users.push({ email, password });
        alert('Registration successful! Please log in.');
        login();
    } else {
        const registerError = document.getElementById('register-error');
        registerError.textContent = 'Please fill in all fields.';
        registerError.style.display = 'block';
    }
}


// Login user function
function loginUser() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    const user = users.find(user => user.email === username && user.password === password);

    if (user) {
        alert('Login successful!');
        window.location.href = 'home.html'; // Redirect to home.html
    } else {
        const loginError = document.getElementById('login-error');
        loginError.textContent = 'Invalid username or password.';
        loginError.style.display = 'block';
    }
}

// Password visibility toggle
document.getElementById('toggleLoginPassword').addEventListener('click', function () {
    const passwordField = document.getElementById('login-password');
    const icon = this.querySelector('i');
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        icon.classList.remove('bx-show');
        icon.classList.add('bx-hide');
    } else {
        passwordField.type = 'password';
        icon.classList.remove('bx-hide');
        icon.classList.add('bx-show');
    }
});

document.getElementById('toggleRegisterPassword').addEventListener('click', function () {
    const passwordField = document.getElementById('register-password');
    const icon = this.querySelector('i');
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        icon.classList.remove('bx-show');
        icon.classList.add('bx-hide');
    } else {
        passwordField.type = 'password';
        icon.classList.remove('bx-hide');
        icon.classList.add('bx-show');
    }
});

// Initialize with login form visible
login();
