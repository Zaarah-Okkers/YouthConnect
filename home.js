

const loggedIn = localStorage.getItem("loggedIn");

const navbar = document.getElementById("mainNavbar");
const homeContent = document.getElementById("homeContent");

if (loggedIn) {
    // USER IS LOGGED IN
    navbar.style.display = "flex";

    // optional: send them to dashboard automatically
    window.location.href = "opportunities.html";

} else {
    // USER NOT LOGGED IN
    navbar.style.display = "none";
    homeContent.style.display = "block";
}
