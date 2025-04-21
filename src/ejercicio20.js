import { PaisesyCapitales } from './Paises20.js';

document.addEventListener('DOMContentLoaded', () => {
    const selectPaises = document.getElementById('pais');
    const selectCapitales = document.getElementById('capi');

    // Evento para cuando se selecciona un país
    selectPaises.addEventListener('change', (event) => {
        const paisSeleccionado = event.target.value;

        if (paisSeleccionado && PaisesyCapitales[paisSeleccionado]) {
            const capitalSeleccionada = PaisesyCapitales[paisSeleccionado];
            selectCapitales.value = capitalSeleccionada;
            console.log(`La capital de ${paisSeleccionado} es ${capitalSeleccionada}`);
        } else {
            selectCapitales.value = '';
            console.log('No se ha seleccionado ningún país.');
        }
    });

    // Evento para cuando se selecciona una capital
    selectCapitales.addEventListener('change', (event) => {
        const capitalSeleccionada = event.target.value;

        if (capitalSeleccionada) {
            let paisEncontrado = '';
            for (const pais in PaisesyCapitales) {
                if (PaisesyCapitales[pais] === capitalSeleccionada) {
                    paisEncontrado = pais;
                    break;
                }
            }
            if (paisEncontrado) {
                selectPaises.value = paisEncontrado;
                console.log(`El país de la capital ${capitalSeleccionada} es ${paisEncontrado}`);
            } else {
                selectPaises.value = '';
                console.log('La capital: ' + capitalSeleccionada + ' no se encuentra en la lista de países.');
            }
        } else {
            console.log('No se ha seleccionado ninguna capital.');
        }
    });
});