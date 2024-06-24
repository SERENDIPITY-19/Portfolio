document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
      alert("Please fill in all fields.");
      return;
    }

    alert(
      "Message sent successfully!\n\nName: " +
        name +
        "\nEmail: " +
        email +
        "\nMessage: " +
        message
    );
    document.getElementById("contact-form").reset();
  });
