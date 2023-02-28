const numeros = [1, 2, 3, 4, 5];

const sumatoria = (numeros, multiplicar) => {
    setTimeout(() => {
        let suma = 0;
        numeros.forEach( numero => suma += numero );
        multiplicar( suma );
    }, 5000);
}


sumatoria(numeros, (sumatoria) => console.log(`LA sumatoria final es ${sumatoria * 100}`));

