function redirectToSignup() {
    window.location.href = "signup.html"; // Replace with the actual sign-up page URL
}
// Open initial login modal with options for User and Doctor
function openLoginModal() {
    document.getElementById("loginModal").style.display = "flex";
}

// Close the initial login modal
function closeLoginModal() {
    document.getElementById("loginModal").style.display = "none";
}

// Open User Registration modal
function openUserRegister() {
    closeLoginModal();
    document.getElementById("userRegisterModal").style.display = "flex";
}

// Close User Registration modal
function closeUserRegister() {
    document.getElementById("userRegisterModal").style.display = "none";
}

// Open Doctor Login modal
function openDoctorLogin() {
    closeLoginModal();
    document.getElementById("doctorLoginModal").style.display = "flex";
}

// Close Doctor Login modal
function closeDoctorLogin() {
    document.getElementById("doctorLoginModal").style.display = "none";
}

// Event listener for the "Get Started" button
document.querySelector(".cta-button").addEventListener("click", openLoginModal);

// Optional: Close modal when clicking outside the modal content
window.onclick = function(event) {
    if (event.target.classList.contains("modal")) {
        event.target.style.display = "none";
    }
};

// Sample doctors for availability check
const doctors = [
    { name: "Dr. John Doe", specialty: "Cardiologist" },
    { name: "Dr. Jane Smith", specialty: "Pediatrician" },
    { name: "Dr. Lisa Ray", specialty: "Dermatologist" }
];

// Function to display doctor list when "Check Doctor Availability" is clicked
function checkDoctorAvailability() {
    const doctorList = document.getElementById("doctorList");
    const doctorContainer = document.getElementById("doctorContainer");

    // Clear existing doctor cards
    doctorContainer.innerHTML = "";

    // Populate doctor list
    doctors.forEach((doctor, index) => {
        const doctorCard = document.createElement("div");
        doctorCard.className = "doctor-card";
        doctorCard.innerHTML = `
            <div>
                <h4>${doctor.name}</h4>
                <p>${doctor.specialty}</p>
            </div>
            <button class="cta-button" onclick="openAvailabilityModal(${index})">Check</button>
        `;
        doctorContainer.appendChild(doctorCard);
    });

    // Display doctor list
    doctorList.style.display = "block";
}

// Function to open availability modal with dates and times
function openAvailabilityModal(doctorIndex) {
    const availabilityContainer = document.getElementById("availabilityContainer");
    availabilityContainer.innerHTML = "";

    // Sample dates and times for availability
    const availableTimes = [
        { date: "2024-11-02", time: "10:00 AM" },
        { date: "2024-11-02", time: "02:00 PM" },
        { date: "2024-11-03", time: "11:00 AM" }
    ];

    // Populate modal with available dates and times
    availableTimes.forEach((slot) => {
        const timeSlot = document.createElement("div");
        timeSlot.className = "time-slot";
        timeSlot.innerHTML = `<p>${slot.date} - ${slot.time}</p>`;
        availabilityContainer.appendChild(timeSlot);
    });

    // Show the modal
    document.getElementById("availabilityModal").style.display = "flex";
}

// Close availability modal
function closeAvailabilityModal() {
    document.getElementById("availabilityModal").style.display = "none";
}

// Confirm booking and show confirmation message
function confirmBooking() {
    closeAvailabilityModal();

    // Hide booking form and doctor list
    document.getElementById("bookingForm").style.display = "none";
    document.getElementById("doctorList").style.display = "none";

    // Show confirmation message
    document.getElementById("confirmationMessage").style.display = "block";
}

// Optional: Close modal when clicking outside the modal content
window.onclick = function(event) {
    if (event.target.classList.contains("modal")) {
        event.target.style.display = "none";
    }
};

