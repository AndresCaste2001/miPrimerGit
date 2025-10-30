const Persona = {
    nombre: "Juan",
    edad: 30,
    profesion: "Desarrollador"
}

const mostrarNombre = ({nombre}) => {
    alert(`Nombre: ${nombre}`)
    console.log(`Nombre: ${nombre}`);
}
const mostrarEdad = (persona) => {
    const {edad} = persona;
    alert(`Edad: ${edad}`);
    console.log(`Edad: ${edad}`);
}
const mostrarProfesion = (persona) => {
    alert(`Profesión: ${persona.profesion}`);
    const {profesion} = persona;
    console.log(`Profesión: ${profesion}`);
}
const mostrarInfo = ({nombre, edad, profesion}) => {
    alert(`
        Nombre: ${nombre}
        Edad: ${edad}
        Profesión: ${profesion}`);
    console.log(`Nombre: ${nombre}, Edad: ${edad}, Profesión: ${profesion}`);
}
