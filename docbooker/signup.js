// // Show user signup form
// function showUserSignup() {
//     document.getElementById("signupSelection").style.display = "none";
//     document.getElementById("userSignup").style.display = "block";
//     document.getElementById("doctorResistration").style.display = "none";
// }

// // Show doctor signup form
// function showDoctorSignup() {
//     document.getElementById("signupSelection").style.display = "none";
//     document.getElementById("doctorResistration").style.display = "block";
//     document.getElementById("userSignup").style.display = "none";
// }

// // Handle user signup form submission
// document.getElementById("userSignupForm").addEventListener("submit", function(event) {
//     event.preventDefault();
//     alert("User Registered Successfully!");
//     // Add your logic to handle the registration (e.g., AJAX call to server)
//     this.reset(); // Reset the form after submission
//     document.getElementById("userSignup").style.display = "none"; // Hide signup form
//     document.getElementById("signupSelection").style.display = "block"; // Show selection again
// });

// // Handle doctor signup form submission
// document.getElementById("doctorResistrationForm").addEventListener("submit", function(event) {
//     event.preventDefault();
//     alert("Doctor Registered Successfully!");
//     // Add your logic to handle the registration (e.g., AJAX call to server)
//     this.reset(); // Reset the form after submission
//     document.getElementById("doctorResistration").style.display = "none"; // Hide signup form
//     document.getElementById("signupSelection").style.display = "block"; // Show selection again
// });

// signup.js

function showUserSignup() {
    // Hide other sections
    document.getElementById("signupSelection").style.display = "none";
    document.getElementById("doctorsignup").style.display = "none";
    // Show user signup section
    document.getElementById("userSignup").style.display = "block";
}

function showDoctorSignup() {
    // Hide other sections
    document.getElementById("signupSelection").style.display = "none";
    document.getElementById("userSignup").style.display = "none";
    // Show doctor signup section
    document.getElementById("doctorsignup").style.display = "block";
}
s