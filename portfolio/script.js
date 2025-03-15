document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.querySelector(".navbar-collapse");

    // Navbar Scroll Effect
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    // Close navbar when clicking outside
    document.addEventListener("click", function (event) {
        if (
            navbarCollapse.classList.contains("show") &&
            !navbar.contains(event.target) &&
            !navbarToggler.contains(event.target)
        ) {
            navbarToggler.click(); // Closes the navbar
        }
    });
});
// Function to animate circular progress bars
function animateProgressBars() {
    document.querySelectorAll(".circle-chart").forEach(chart => {
        const percent = chart.getAttribute("data-percent") / 100;
        chart.querySelector(".progress").style.setProperty("--percent", percent);
    });
}

// Scroll Animation - Reveal Elements
const elements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            if (entry.target.classList.contains("circle-chart")) {
                animateProgressBars();
            }
        }
    });
}, { threshold: 0.3 });

elements.forEach(element => observer.observe(element));
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents default form submission

    let formData = new FormData(this);

    fetch(this.action, {
        method: this.method,
        body: formData
    })
    .then(response => response.json())
    .then(result => {
        if (result.success) {
            alert("Form Sent Successfully! ✅"); // Success Popup
            this.reset(); // Clears the form after submission
        } else {
            alert("Error! ❌ Please try again.");
        }
    })
    .catch(error => {
        alert("Something went wrong. Please try again later.");
    });
});
