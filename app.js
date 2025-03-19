const form = document.querySelector("#form");


form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name")
    const email = document.getElementById("email")
    const number = document.getElementById("number")
    const password = document.getElementById("password")
    const Confirmpassword = document.getElementById("Confirmpassword")
    const city = document.getElementById("city")
    const country = document.getElementById("country")
    const sucessMessage = document.getElementById("sucessmessage")

    let isValid = true;
    let firstInvalidField = null;
    function validateField(field, regex, errorMessage) {
        const errorElement = field.nextElementSibling;
        if (!regex.test(field.value.trim())) {
            errorElement.textContent = errorMessage;
            errorElement.style.display = "block";
            errorElement.style.color = "red";
            if (!firstInvalidField) {
                firstInvalidField = field;
            }
            isValid = false;
        }
        else {
            errorElement.style.display = "none"
        }

    }
    validateField(name, /^[a-zA-Z\s]+$/, "Name must contain only letters");
    validateField(email, /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Enter a valid email address");
    validateField(number, /^\d{10}$/, "Enter a valid contact number");
    validateField(city, /^[a-zA-Z\s]+$/, "City must contain only letters");
    validateField(country, /^[a-zA-Z\s]+$/, "Country must contain only letters");
    validateField(password, /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/, "Password must contain 8+ characters, a number, a special character, a lowercase, and an uppercase.");
    if (Confirmpassword.value.trim() !== password.value.trim()) {
        Confirmpassword.nextElementSibling.textContent = "Password doesn't match";
        Confirmpassword.nextElementSibling.style.display = "block";
        Confirmpassword.nextElementSibling.style.color = "red";
        if (!firstInvalidField) {
            firstInvalidField = Confirmpassword;
        }
        isValid = false;
    } else {
        Confirmpassword.nextElementSibling.style.display = "none";
    }

    if (isValid) {
        const formData = {
            Name: name.value.trim(),
            Email: email.value.trim(),
            Contact: number.value.trim(),
            Password: password.value.trim(),
            City: city.value.trim(),
            Country: country.value.trim()
        };
        console.log("Form Details", formData)
        sucessMessage.textContent = "Your registration has been done sucessfully 🥳"
        sucessMessage.style.display = "block"
        document.getElementById("form").reset()
    } else {
        sucessMessage.style.display = "none"
    }
});

function togglebutton(togglebuttonid, passwordfieldId) {
    const togglebutton = document.getElementById(togglebuttonid);
    const passwordfield = document.getElementById(passwordfieldId);
    togglebutton.addEventListener("click", () => {
        if (passwordfield.type === "password") {
            passwordfield.type = "text"
            togglebutton.textContent = "🙈"
        } else {
            passwordfield.type = "password"
            togglebutton.textContent = "👁️"
        }
    })
}
togglebutton("togglepass", "password")
togglebutton("togglepassconfo", "Confirmpassword")
