
document.addEventListener("DOMContentLoaded", function () {  // Espera a que el contenido del DOM esté completamente cargado antes de ejecutar el código
  
  
  const nameInput = document.getElementById("nombre"); // Campo de entrada para el nombre
  const lastnameInput = document.getElementById("apellido")
  const emailInput = document.getElementById("email"); // Campo de entrada para el correo electrónico
  const messageInput = document.getElementById("mensaje"); // Campo de entrada para el mensaje
  var miCheckbox = document.getElementById("robot");
  const submitButton = document.querySelector("button[type='submit']"); // Botón de enviar
  const form = document.getElementById("contact-form"); // Formulario completo

  miCheckbox.addEventListener('click', function() {
    if(miCheckbox.checked) {
      miCheckbox.innerText = "El elemento está marcado";
    } else {
      miCheckbox.innerText = "Ahora está desmarcado";
    }
  });

  function checkFormFields() { // Comprueba si los campos de entrada no están vacíos
    if (
      nameInput.value.trim() !== "" && // Verifica que el nombre no esté vacío
      lastnameInput.trim() !== "" &&
      emailInput.value.trim() !== "" && // Verifica que el correo no esté vacío
      messageInput.value.trim() !== ""  &&// Verifica que el mensaje no esté vacío
      miCheckbox.checked
    ) 
    {
      submitButton.disabled = false; // Habilita el botón si todos los campos están completos
    } else {
      submitButton.disabled = true; // Deshabilita el botón si algún campo está vacío
    }
  }

  submitButton.disabled = true;  // Añade un evento de escucha para detectar cambios en los campos de entrada

  nameInput.addEventListener("input", checkFormFields); // Detecta cambios en el campo de nombre
  lastnameInput.addEventListener("input", checkFormFields)
  emailInput.addEventListener("input", checkFormFields); // Detecta cambios en el campo de correo
  messageInput.addEventListener("input", checkFormFields); // Detecta cambios en el campo de mensaje
  miCheckbox.addEventListener("input", checkFormFields);

  // Maneja el evento de envío del formulario
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que la página se recargue al enviar el formulario
    alert("Formulario enviado correctamente"); // Muestra un mensaje de éxito
    form.reset(); // Limpia los campos del formulario
    submitButton.disabled = true; // Deshabilita el botón nuevamente después de enviar
  });
});
