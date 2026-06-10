const API = "http://127.0.0.1:5000/formularios";

// Cargar formularios (GET)
async function cargarFormularios() {

  const res = await fetch(API);
  const data = await res.json();

  const lista = document.getElementById("lista");

  lista.innerHTML = "";

  data.forEach(f => {
    lista.innerHTML += `
      <div>
        <h3>${f.nombre}</h3>
        <p>${f.email}</p>
        <p>${f.asunto}</p>
        <p>${f.mensaje}</p>
        <hr>
      </div>
    `;
  });
}

// Enviar formulario (POST)
document.getElementById("formulario").addEventListener("submit", async (e) => {
  e.preventDefault();

  const datos = {
    nombre: document.getElementById("nombre").value,
    email: document.getElementById("email").value,
    asunto: document.getElementById("asunto").value,
    mensaje: document.getElementById("mensaje").value
  };

  await fetch(API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(datos)
  });

  document.getElementById("formulario").reset();

  cargarFormularios();
});

// Inicial
cargarFormularios();