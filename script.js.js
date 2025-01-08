// Show login form
function showLogin() {
  document.getElementById('mainPage').style.display = 'none';
  document.getElementById('loginForm').style.display = 'block';
}

// Show register form
function showRegister() {
  document.getElementById('mainPage').style.display = 'none';
  document.getElementById('registerForm').style.display = 'block';
}

// Simulate login
function login() {
  document.getElementById('loginForm').style.display = 'none';
  document.getElementById('dashboardPage').style.display = 'flex';
}

// Simulate register
function register() {
  document.getElementById('registerForm').style.display = 'none';
  document.getElementById('dashboardPage').style.display = 'flex';
}

// Open Post Page
function openPostPage() {
  document.getElementById('dashboardPage').style.display = 'none';
  document.getElementById('postPage').style.display = 'block';
}

// Open Comment Popup
function openCommentPopup() {
  document.getElementById('commentPopup').style.display = 'block';
}

// Close Comment Popup
function closeCommentPopup() {
  document.getElementById('commentPopup').style.display = 'none';
}
