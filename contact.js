// contact.js

document.addEventListener("DOMContentLoaded", function() {
    // Form submission handler
    const form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get form data
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        // Simple validation
        if (name === "" || email === "" || message === "") {
            alert("Vui lòng điền đầy đủ thông tin.");
            return;
        }

        // Form submission logic (e.g., sending data to a server)
        // Here, we'll just show a confirmation message
        alert("Cảm ơn bạn đã liên hệ với chúng tôi! Chúng tôi sẽ sớm phản hồi lại bạn.");

        // Optionally, reset the form
        form.reset();
    });
});
