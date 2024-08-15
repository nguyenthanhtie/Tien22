// registration.js

document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get form values
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const incomeSource = document.getElementById("incomeSource").value.trim();
        const monthlyIncome = document.getElementById("monthlyIncome").value.trim();
        const service = document.getElementById("service").value;

        // Simple validation
        if (name === "" || email === "" || phone === "" || incomeSource === "" || monthlyIncome === "" || service === "") {
            alert("Vui lòng điền đầy đủ thông tin.");
            return;
        }

        // Confirmation message
        alert("Cảm ơn bạn đã đăng ký dịch vụ! Chúng tôi sẽ liên hệ với bạn sớm.");

        // Optionally, reset the form
        form.reset();
    });
});
