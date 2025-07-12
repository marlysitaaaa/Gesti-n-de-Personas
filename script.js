const cursos = [
  "Introducción a RRHH",
  "Comunicación Organizacional",
  "Sociología del Trabajo",
  "Estadística Aplicada",
  "Legislación Laboral",
  "Gestión del Talento",
  "People Analytics",
  "Psicología Organizacional",
  "Gestión de Proyectos",
];

const estados = ["pendiente", "cursando", "aprobado"];
const mallaDiv = document.getElementById("malla");

function guardar() {
  const data = Array.from(document.querySelectorAll('.curso'))
                .map(el => el.dataset.estado);
  localStorage.setItem("estadosUSACH_GP", JSON.stringify(data));
}

function cargar() {
  const data = JSON.parse(localStorage.getItem("estadosUSACH_GP") || "[]");
  return (data.length === cursos.length) ? data : cursos.map(_ => "pendiente");
}

function dibujar() {
  const data = cargar();
  mallaDiv.innerHTML = "";
  cursos.forEach((nombre, i) => {
    const div = document.createElement("div");
    div.textContent = nombre;
    div.className = `curso ${data[i]}`;
    div.dataset.estado = data[i];
    div.onclick = () => {
      let idx = estados.indexOf(div.dataset.estado);
      idx = (idx + 1) % estados.length;
      div.dataset.estado = estados[idx];
      estados.forEach(e => div.classList.remove(e));
      div.classList.add(estados[idx]);
      guardar();
    };
    mallaDiv.appendChild(div);
  });
}

dibujar();
