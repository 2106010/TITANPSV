function iniciarMap() {
    var coord = { lat: 24.0144987, lng: -104.6443091 }; // Coordenadas de Durango, Dgo.
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 17,
        center: coord
    });
    var marker = new google.maps.Marker({
        position: coord,
        map: map
    });
}

// Validación para el campo de nombre
document.getElementById('name').addEventListener('input', function(event) {
    var input = event.target;
    input.value = input.value.replace(/[0-9]/g, '');
});

function cambiarImagen(button, imageUrl) {
    const card = button.closest('.card');
    const images = card.querySelectorAll('.card-images img');
    images.forEach(img => {
        if (img.src.includes(imageUrl)) {
            img.classList.add('active-image');
            img.classList.remove('hidden-image');
        } else {
            img.classList.add('hidden-image');
            img.classList.remove('active-image');
        }
    });
}

function enviarWhatsApp(producto) {
    const mensaje = `Hola, necesito una cotización de este producto: ${producto}`;
    const telefono = "6181588032"; // Número de WhatsApp
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
}

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada

    // Obtén los datos del formulario
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    // Envía el correo usando EmailJS
    emailjs.send("service_3b2j5nd", "template_ah74yv5", { //llave de servicio y llave de plantilla
        name: name,
        email: email,
        subject: subject,
        message: message
    }).then(function(response) {
        alert("Correo enviado exitosamente!");
        document.getElementById("contact-form").reset(); // Limpia el formulario
    }, function(error) {
        alert("Error al enviar el correo: " + JSON.stringify(error));
    });
});



