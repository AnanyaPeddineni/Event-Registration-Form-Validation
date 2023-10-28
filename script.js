
function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const zipcode = document.getElementById("zipcode").value;
    const mobile = document.getElementById("mobile").value;
    const emailPattern = /^[A-Za-z0-9._-]+@(vitstudent\.ac\.in|vit\.ac\.in)$/;


    if (!name || !email || !password || !zipcode || !mobile) {
        alert("All fields are mandatory");
        return false;
    }

    if (zipcode.length !== 5) {
        alert("Zip code should be exactly five digits");
        return false;
    }

    if (!email.match(emailPattern)) {
        alert("Email validation allows only VIT mails");
        return false;
    }

    if (password.length < 10 || password.length > 100) {
        alert("Password must be between 10 and 100 characters");
        return false;
    }

    const uniqueChars = new Set(password);
    if (uniqueChars.size < 5) {
        alert("Password must have 5 or more unique characters");
        return false;
    }

    if (
        !/[A-Z]/.test(password) ||
        !/[a-z]/.test(password) ||
        !/[0-9]/.test(password) ||
        !/[~!@#\$%\^*\-_+=\[\]{};:,.?]/.test(password)
    ) {
        alert("Password must contain at least 3 of the following: uppercase, lowercase, numeric, or special characters");
        return false;
    }

    if (mobile.length !== 10) {
        alert("Mobile number should be 10 digits only");
        return false;
    }

    document.body.innerHTML = '<h1 style = "text-align: center; margin: 100px; padding: 50px; border-style:solid;">VIT Event Registration Successful!</h1>'; // Replace the entire page content
    
}