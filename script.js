document.addEventListener("DOMContentLoaded", function () {

  const btn = document.getElementById("whatsappBtn");

  btn.addEventListener("click", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !phone) {
      alert("Please fill Name and Phone Number");
      return;
    }

    const text = `Hello Rizwan Clothes 👋

Name: ${name}
Phone: ${phone}
Message: ${message || "Interested in your collection"}

I want to order clothes. Please share details.`;

    const encodedText = encodeURIComponent(text);
    const whatsappNumber = "919368054052";

    const url = `https://wa.me/${whatsappNumber}?text=${encodedText}`;
    window.open(url, "_blank");
  });

});