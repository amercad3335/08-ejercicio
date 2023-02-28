const crearEstudiante = (nombre, edad, planeta, estatura, clasificarEstudiante) => {
    setTimeout(() => {
        let estudiante = {
            nombre,
            edad,
            planeta,
            estatura
        }

        if (!estudiante) {
            clasificarEstudiante(`Error, no hay ningun estudaiante`);
            return;
        }

        clasificarEstudiante(null, estudiante);
    }, 3000);
}

crearEstudiante( 'Aandres', 27, 'Tierra', '180', (error, estudaiante) => {

    if (error) {
        console.log(error);
        return;
    }

    (estudaiante.edad > 15) ? console.log(`Su edad es ${estudaiante.edad} tu clase sera manejo de la fuersa`) 
        : console.log(`Su edad es ${edad} tu clase sera uso del sable`);
});