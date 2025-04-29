(function() {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init({
      publicKey: "GKqFC9UPNhT72wr25",
    });
})();

const msg = document.querySelector('.form-message');
const form = document.getElementById('contact-form');

window.onload = function () {
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Input validation before sending
        const items = document.querySelectorAll(".contact-input");
        let hasError = false;

        for (const contactInput of items) {
            if (contactInput.value.trim() === "") {
                contactInput.classList.add("error");
                contactInput.parentElement.classList.add("error");
                hasError = true;
            }

            contactInput.addEventListener("keyup", () => {
                if (contactInput.value.trim() !== "") {
                    contactInput.classList.remove("error");
                    contactInput.parentElement.classList.remove("error");
                } else {
                    contactInput.classList.add("error");
                    contactInput.parentElement.classList.add("error");
                }
            });
        }

        if (hasError) {
            return; // Stop sending email if there are errors
        }

        // Show loader and hide button
        document.querySelector('.loader').classList.add('show');
        document.querySelector('.contact-btn').classList.add('hide');

        // Send email
        emailjs.sendForm('service_v0zel7c', 'template_evq2s08', this)
            .then(function () {
                // On success
                document.querySelector('.contact-btn').classList.remove('hide');
                form.reset();
                document.querySelector('.loader').classList.remove('show');
                msg.innerHTML = '<div class="success-msg">Message sent successfully!</div>';
                msg.classList.add('show');
                setTimeout(() => msg.classList.remove('show'), 5000);
            })
            .catch(function (error) {
                // On error
                document.querySelector('.loader').classList.remove('show');
                document.querySelector('.contact-btn').classList.remove('hide');
                msg.innerHTML = '<div class="error-msg">Email not sent. Please try again.</div>';
                msg.classList.add('show');
                console.error('Email sending failed:', error);
            });
    });
};