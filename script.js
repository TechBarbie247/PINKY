document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Stop the form from submitting the default way

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const formMessage = document.getElementById("formMessage");

  // Simple validation
  if (!name || !email || !message) {
    formMessage.textContent = "Please fill out all fields.";
    formMessage.style.color = "red";
    return;
  }

  // Simulate sending (you can replace this with fetch() to send to a server)
  setTimeout(() => {
    formMessage.textContent = "Your message has been sent!";
    formMessage.style.color = "green";

    // Reset form
    document.getElementById("contactForm").reset();
  }, 500);
});
