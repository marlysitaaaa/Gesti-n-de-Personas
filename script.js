const cursos = [
  // 1er Año - Semestre 1
  "Introducción a la Gestión de Personas",
  "Administración",
  "Psicología General",
  "Matemáticas I",
  "Uso de Recursos de Información",
  "Inglés I",

  // 1er Año - Semestre 2
  "Formación Ciudadana",
  "Economía de Negocios",
  "Procesos Cognitivos y Afectivos",
  "Matemáticas II",
  "Ofimática Aplicada a la Gestión de Personas",
  "Inglés II",

  // 2do Año - Semestre 3
  "Gestión I: Bienestar Organizacional y Calidad de Vida",
  "Estrategia Organizacional",
  "Neurociencia",
  "Métodos Cuantitativos I",
  "Introducción a la Programación Aplicada",
  "Inglés III",

  // 2do Año - Semestre 4
  "Gestión II: Capacitación",
  "Responsabilidad Social y Sustentabilidad",
  "Taller de Integración Gestión de Personas",
  "Métodos Cuantitativos II",
  "Procesamiento y Bases de Datos",
  "Inglés IV",

  // 3er Año - Semestre 5
  "Gestión III: Reclutamiento y Selección",
  "Contabilidad",
  "Antropología del Trabajo",
  "Metodología de Investigación Cuantitativa",
  "Visualización y Minería de Datos",
  "Legislación Laboral I",

  // 3er Año - Semestre 6
  "Gestión IV: Compensaciones y Desempeño",
  "Finanzas y Presupuestos",
  "Psicología Laboral",
  "Metodología de Investigación Cualitativa",
  "Machine Learning",
  "Legislación Laboral II",

  // 4to Año - Semestre 7
  "Remuneraciones",
  "Formulación y Evaluación de Proyectos",
  "Sociología del Trabajo",
  "Cambio Organizacional",
  "Machine Learning Avanzado",
  "Relaciones Laborales",

  // 4to Año - Semestre 8
  "Proyecto de Titulación",
  "Control de Gestión",
  "Comunicación y Negociación",
  "Transformación Digital",
  "Proyecto de Analítica de Personas",
  "Gestión de la Innovación",

  // 5to Año - Semestre 9
  "Seminario de Titulación",
  "Práctica Profesional",
  "Electivo",
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
