document.addEventListener("DOMContentLoaded", () => {
    const signupForm = document.querySelector(".auth-form");
    const roleInputs = document.querySelectorAll('input[name="user-role"]');
    const passwordInput = document.getElementById("password");
    const togglePasswordIcon = document.querySelector(".toggle-password-visibility");

    // =========================
    // ROLE CARD SELECTION
    // =========================
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

    // =========================
    // PASSWORD VISIBILITY TOGGLE
    // =========================
    if (togglePasswordIcon && passwordInput) {
        togglePasswordIcon.addEventListener("click", () => {
            const isPassword = passwordInput.type === "password";

            passwordInput.type = isPassword ? "text" : "password";

            togglePasswordIcon.classList.toggle("fa-eye");
            togglePasswordIcon.classList.toggle("fa-eye-slash");
        });
    }

    // =========================
    // SIGNUP FORM SUBMISSION
    // =========================
    if (signupForm) {
        signupForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const firstName =
                document.getElementById("first-name").value.trim();

            const lastName =
                document.getElementById("last-name").value.trim();

            const email =
                document.getElementById("email").value.trim();

            const password =
                passwordInput.value.trim();

            const selectedRole =
                document.querySelector(
                    'input[name="user-role"]:checked'
                )?.value;

            // Validation
            if (
                !firstName ||
                !lastName ||
                !email ||
                !password ||
                !selectedRole
            ) {
                alert("Please fill in all fields.");
                return;
            }

            // Get existing users
            const users =
                JSON.parse(localStorage.getItem("users")) || [];

            // Check if email already exists
            const existingUser = users.find(
                user => user.email === email
            );

            if (existingUser) {
                alert("An account with this email already exists.");
                return;
            }

            // Create new user object
            const userData = {
                firstName,
                lastName,
                email,
                password,
                role: selectedRole
            };

            // Save user
            users.push(userData);

            localStorage.setItem(
                "users",
                JSON.stringify(users)
            );

            alert("Account created successfully!");

            // Redirect to login page
            window.location.href = "login.html";
        });
    }
});
