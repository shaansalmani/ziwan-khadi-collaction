<<<<<<< HEAD

document.addEventListener("DOMContentLoaded", function () {

  const btn = document.querySelector('a[href="#"]');

  btn.addEventListener("click", function (e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    // Basic validation
    if (!name || !phone) {
      alert("Please fill Name and Phone Number");
      return;
    }

    // WhatsApp message format
    const text = `Hello Rizwan Clothes 👋

Name: ${name}
Phone: ${phone}
Message: ${message || "Interested in your collection"}

I want to order clothes. Please share details.`;

    // Encode text
    const encodedText = encodeURIComponent(text);

    // Your WhatsApp number
    const whatsappNumber = "919368054052";

    // Open WhatsApp
    const url = `https://wa.me/${whatsappNumber}?text=${encodedText}`;
    window.open(url, "_blank");
  });

});
=======

document.addEventListener("DOMContentLoaded", function () {

  const btn = document.querySelector('a[href="#"]');

  btn.addEventListener("click", function (e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    // Basic validation
    if (!name || !phone) {
      alert("Please fill Name and Phone Number");
      return;
    }

    // WhatsApp message format
    const text = `Hello Rizwan Clothes 👋

Name: ${name}
Phone: ${phone}
Message: ${message || "Interested in your collection"}

I want to order clothes. Please share details.`;

    // Encode text
    const encodedText = encodeURIComponent(text);

    // Your WhatsApp number
    const whatsappNumber = "919368054052";

    // Open WhatsApp
    const url = `https://wa.me/${whatsappNumber}?text=${encodedText}`;
    window.open(url, "_blank");
  });

});
>>>>>>> 734cdc234cc6e3ce529e66323d7cfef66d9d3e14
