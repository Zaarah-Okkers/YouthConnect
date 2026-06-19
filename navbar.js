document.addEventListener("DOMContentLoaded", () => {
  const loggedOutUI = document.getElementById("logged-out-ui");
  const loggedInUI = document.getElementById("logged-in-ui");
  const userNameSpan = document.getElementById("user-display-name");
  const logoutLink = document.getElementById("logout-link");

  // Dropdown toggle elements
  const profileTrigger = document.querySelector(".profile-trigger");
  const dropdownMenu = document.getElementById("profile-dropdown-menu");

  // 1. Check if a user registration payload session exists
  const storedUser = localStorage.getItem("loggedInUser");

  if (storedUser) {
    const user = JSON.parse(storedUser);

    // Hide buttons, show profile card components
    if (loggedOutUI) loggedOutUI.style.display = "none";
    if (loggedInUI) loggedInUI.style.display = "flex";

    // Assign first name parsed out of your database structure
    if (userNameSpan && user.firstName) {
      userNameSpan.textContent = user.firstName;
    }
  } else {
    // Fallback safety to ensure button states remain intact
    if (loggedOutUI) loggedOutUI.style.display = "flex";
    if (loggedInUI) loggedInUI.style.display = "none";
  }

  // 2. Interactive Dropdown Menu Toggle Logic
  if (profileTrigger && dropdownMenu) {
    profileTrigger.addEventListener("click", (e) => {
      e.stopPropagation();
      const isHidden = dropdownMenu.style.display === "none";
      dropdownMenu.style.display = isHidden ? "block" : "none";
    });

    // Close dropdown when clicking anywhere else on the document frame
    document.addEventListener("click", () => {
      dropdownMenu.style.display = "none";
    });
  }

  // 3. Clear Storage Keys upon Requesting Log Out
  if (logoutLink) {
    logoutLink.addEventListener("click", (e) => {
      e.preventDefault();
      localStorage.removeItem("loggedInUser");
      alert("You have logged out successfully.");
      window.location.href = "home.html"; // Redirect to public lander page
    });
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const loggedOutUI = document.getElementById("logged-out-ui");
  const loggedInUI = document.getElementById("logged-in-ui");
  const userNameSpan = document.getElementById("user-display-name");
  const logoutLink = document.getElementById("logout-link");

  // Dropdown toggle elements
  const profileTrigger = document.querySelector(".profile-trigger");
  const dropdownMenu = document.getElementById("profile-dropdown-menu");

  // 1. Check if a user registration payload session exists
  const storedUser = localStorage.getItem("loggedInUser");

  if (storedUser) {
    const user = JSON.parse(storedUser);

    // Hide buttons, show profile card components
    if (loggedOutUI) loggedOutUI.style.display = "none";
    if (loggedInUI) loggedInUI.style.display = "flex";

    // Assign first name parsed out of your database structure
    if (userNameSpan && user.firstName) {
      userNameSpan.textContent = user.firstName;
    }
  } else {
    // Fallback safety to ensure button states remain intact
    if (loggedOutUI) loggedOutUI.style.display = "flex";
    if (loggedInUI) loggedInUI.style.display = "none";
  }

  // 2. Interactive Dropdown Menu Toggle Logic
  if (profileTrigger && dropdownMenu) {
    profileTrigger.addEventListener("click", (e) => {
      e.stopPropagation();
      const isHidden = dropdownMenu.style.display === "none";
      dropdownMenu.style.display = isHidden ? "block" : "none";
    });

    // Close dropdown when clicking anywhere else on the document frame
    document.addEventListener("click", () => {
      dropdownMenu.style.display = "none";
    });
  }

  // 3. Clear Storage Keys upon Requesting Log Out
  if (logoutLink) {
    logoutLink.addEventListener("click", (e) => {
      e.preventDefault();
      localStorage.removeItem("loggedInUser");
      alert("You have logged out successfully.");
      window.location.href = "home.html"; // Redirect to public lander page
    });
  }
});
