document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents the form from refreshing the page.

    const form = event.target;
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const msgEl = document.getElementById("form-message");

    if (name && email && message) {
        // Send form data to Formspree
        fetch(form.action, {
            method: "POST",
            headers: { 'Accept': 'application/json' },
            body: new FormData(form)
        })
        .then(response => {
            if (response.ok) {
                msgEl.innerText = `Thank you for your message, ${name}! We will get back to you shortly.`;
                msgEl.style.color = "green";
                form.reset(); // Clears the form
            } else {
                msgEl.innerText = "Oops! Something went wrong. Try again.";
                msgEl.style.color = "red";
            }
        })
        .catch(error => {
            msgEl.innerText = "There was a problem submitting the form.";
            msgEl.style.color = "red";
        });
    } else {
        msgEl.innerText = "Please fill in all fields.";
        msgEl.style.color = "red";
    }
});
msgEl.style.opacity = "1";
setTimeout(() => {
    msgEl.style.opacity = "0";
}, 5000);
