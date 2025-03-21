// Este evento se activa cuando el documento HTML ha sido completamente cargado
document.addEventListener("DOMContentLoaded", () => {
    // Se obtiene el formulario de contacto, el contenedor y se recupera el localStorage
    const contactForm = document.getElementById("form");
    const contactsContainer = document.getElementById("contacts");
    let contacts = JSON.parse(localStorage.getItem("contacts")) || [];

    // Función para renderizar contactos, limpia el contenerdor y crea el div.
    function renderContacts() {
        contactsContainer.innerHTML = "";
        contacts.forEach((contact, index) => {
            const contactCard = document.createElement("div");
            contactCard.className = "contact-card";
            contactCard.innerHTML = `
                <div>
                    <strong>${contact.name}</strong><br>
                    <p>Télefono: ${contact.phone}</p>
                    <p>Email: ${contact.email}</p>
                    <p>Dirección: ${contact.address}</p>
                </div>
                <div class="button-container">
                    <button onclick="editContact(${index})">Editar</button>
                    <button onclick="deleteContact(${index})">Eliminar</button>
                </div>
            `;
            contactsContainer.appendChild(contactCard);
        });
    }

    // Función para guardar contactos en localStorage como una cadena JSON,
    function saveContacts() {
        localStorage.setItem("contacts", JSON.stringify(contacts));
    }

    // Función para agregar o actualizar un contacto
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault(); //Al enviar el formulario, se evita que la página se recargue con e.preventDefault().

// Se obtienen los valores del formulario y se verifica que el nombre y teléfono estén completos. Si son válidos, se crea un objeto contact y se decide si se agrega un nuevo contacto o se actualiza uno existente.

        const name = document.getElementById("name").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const email = document.getElementById("email").value.trim();
        const address = document.getElementById("address").value.trim();

        if (name && phone) {
            const contact = { name, phone, email, address };
            const contactIndex = contactForm.getAttribute("data-edit-index");

            if (contactIndex !== null) {
                contacts[contactIndex] = contact;
                contactForm.removeAttribute("data-edit-index");
                contactForm.querySelector("button").textContent = "Guardar Contacto";
            } else {
                contacts.push(contact);
            }

            saveContacts();
            renderContacts();
            contactForm.reset();
        } else {
            alert("Por favor, llena los campos requeridos.");
        }
    });

    // Función para editar un contacto
    window.editContact = function (index) {
        const contact = contacts[index];
        document.getElementById("name").value = contact.name;
        document.getElementById("phone").value = contact.phone;
        document.getElementById("email").value = contact.email;
        document.getElementById("address").value = contact.address;
        contactForm.setAttribute("data-edit-index", index);
        contactForm.querySelector("button").textContent = "Actualizar Contacto";
    };

    // Función para eliminar un contacto
    window.deleteContact = function (index) {
        const contactIndex = contactForm.getAttribute("data-edit-index");

        // Eliminar el contacto
        contacts.splice(index, 1);
        saveContacts();
        renderContacts();

        // Si se eliminó el contacto que se estaba editando, limpiar el formulario, esto es para evitar el bug.
        if (contactIndex == index) {
            contactForm.reset(); // Vaciar los campos
            contactForm.removeAttribute("data-edit-index"); // Limpiar el índice de edición
            contactForm.querySelector("button").textContent = "Guardar Contacto"; // Restablecer texto del botón
        }
    };

    // Cargar contactos al inicio
    renderContacts();
});

// Función para alternar el modo claro y oscuro
const switchInput = document.querySelector('.ui-switch input');

// Función para manejar el cambio de tema
const toggleTheme = () => {
    // Verificamos el estado del switch
    if (switchInput.checked) {
        // Cambiar a modo oscuro
        document.body.classList.add('night-mode'); // Cambiado a 'night-mode'
    } else {
        // Cambiar a modo claro
        document.body.classList.remove('night-mode'); // Cambiado a 'night-mode'
    }
};

// Añadimos un event listener al input del switch
switchInput.addEventListener('change', toggleTheme);

// Opcional: carga el estado del switch según el tema guardado en localStorage
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    switchInput.checked = true;
    document.body.classList.add('night-mode'); // Cambiado a 'night-mode'
} else {
    switchInput.checked = false;
    document.body.classList.remove('night-mode'); // Cambiado a 'night-mode'
}

// Guardar el tema en localStorage cuando se cambia
switchInput.addEventListener('change', () => {
    const theme = switchInput.checked ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
});
