const saludar = () => {
    setTimeout(() => {
        console.log('Hola como estas');
        despedir();
    }, 3000)
}

const despedir = () => {
    console.log('Adios mucha suerte');
}

saludar();