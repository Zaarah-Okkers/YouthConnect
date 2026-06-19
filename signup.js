document.addEventListener("DOMContentLoaded", () => {
    const signupForm = document.querySelector(".auth-form");
    const roleInputs = document.querySelectorAll('input[name="user-role"]');
    const passwordInput = document.getElementById("password");
    const togglePasswordIcon = document.querySelector(".toggle-password-visibility");

    // 1. Handle Role Card Selection Visual Highlights
    roleInputs.forEach(input => {
        if (input.checked) {
            input.closest(".role-card-label").classList.add("selected-role");
        }

        input.addEventListener("change", () => {
            roleInputs.forEach(ri => {
                ri.closest(".role-card-label").classList.remove("selected-role");
            });
            if (input.checked) {
                input.closest(".role-card-label").classList.add("selected-role");
            }
        });
    });

    // 2. Toggle Password Visibility (Eye Icon)
    if (togglePasswordIcon && passwordInput) {
        togglePasswordIcon.addEventListener("click", () => {
            const isPassword = passwordInput.getAttribute("type") === "password";
            passwordInput.setAttribute("type", isPassword ? "text" : "password");
            
            if (isPassword) {
                togglePasswordIcon.classList.remove("fa-eye-slash");
                togglePasswordIcon.classList.add("fa-eye");
            } else {
                togglePasswordIcon.classList.remove("fa-eye");
                togglePasswordIcon.classList.add("fa-eye-slash");
            }
        });
    }

    // 3. Process Account Creation, Store Info, and Redirect
    if (signupForm) {
        signupForm.addEventListener("submit", (e) => {
            e.preventDefault(); // Prevent page refresh

            const firstName = document.getElementById("first-name").value.trim();
            const lastName = document.getElementById("last-name").value.trim();
            const email = document.getElementById("email").value.trim();
            const selectedRole = document.querySelector('input[name="user-role"]:checked').value;

            if (!firstName || !lastName || !email || !passwordInput.value) {
                alert("Please fill in all fields.");
                return;
            }

            // MATCHING OBJECT STRUCTURE: This is exactly what your navbar.js expects
            const userData = {
                firstName: firstName,
                lastName: lastName,
                email: email,
                role: selectedRole
            };

            // Save inside local storage under the matching key 'loggedInUser'
            localStorage.setItem("loggedInUser", JSON.stringify(userData));

            // Redirect smoothly to your main page dashboard interface
            window.location.replace("opportunities.html");
        });
    }
});