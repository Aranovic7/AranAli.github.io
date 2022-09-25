var formElement = document.getElementById("contact-form");
var messageElement = document.getElementById("message");

formElement.addEventListener("submit", function(e){
    e.preventDefault();

    var formData = new FormData(formElement);
    var email = formData.get("email")

    messageElement.innerHTML = `Tack för ditt meddelande ${email}!`;
});