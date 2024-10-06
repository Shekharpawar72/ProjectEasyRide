
// function showSidebar(){
//     const sidebar = document.querySelector('.sidebar')
//     sidebar.style.display = 'flex'
//   }
//   function hideSidebar(){
//     const sidebar = document.querySelector('.sidebar')
//     sidebar.style.display = 'none'
//   }

// window.location.href = "from.html"

// login.addEventListener('click',function(){
//   window.location.href = "from.html";
// })
// const login = document.getElementById('login-nav')

window.addEventListener('DOMContentLoaded', function () {
  const loginNav = document.getElementById('login-nav');
  const logoutBtn = document.getElementById('logout-btn');
  const loggedInUser = localStorage.getItem('loggedInUser');

  // If user is logged in, show logout button and hide login button
  if (loggedInUser) {
      loginNav.style.display = 'none';
      logoutBtn.style.display = 'block';
  } else {
      loginNav.style.display = 'block';
      logoutBtn.style.display = 'none';
  }
});

// Logout function
document.getElementById('logout-btn').addEventListener('click', function () {
  // Remove the logged in user from localStorage
  localStorage.removeItem('loggedInUser');
  
  // Optionally, you can also remove other user-related data
  // localStorage.clear(); // Use this if you want to clear everything from localStorage

  // Reload the page to update the UI
  window.location.reload();
});


