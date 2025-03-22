document.addEventListener('DOMContentLoaded', function() {
    const fechaInput = document.getElementById('fecha');
    fechaInput.valueAsDate = new Date();

    const generarBtn = document.getElementById('generar');
    const copiarBtn = document.getElementById('copiar'); // Crear botón "Copiar"
    //copiarBtn.textContent = 'Copiar';
    //document.getElementById('miFormulario').appendChild(copiarBtn); // Agregar botón al formulario

    generarBtn.addEventListener('click', function() {
        const rut = document.getElementById('rut').value;
        const producto = document.getElementById('producto').value;
        const monto = document.getElementById('monto').value;
        const fecha = document.getElementById('fecha').value;
        const canal = document.getElementById('canal').value;
        const descripcion = document.getElementById('descripcion').value;

        const resultadoTexto = `
            RUT: ${rut}<br>
            PRODUCTO: ${producto}<br>
            MONTO: ${monto}<br>
            FECHA: ${fecha}<br>
            CANAL: ${canal}<br>
            DESCRIPCION: ${descripcion}
        `;

        document.getElementById('resultado').innerHTML = resultadoTexto;
    });

    copiarBtn.addEventListener('click', function() { // Evento para el botón "Copiar"
        const resultadoTexto = document.getElementById('resultado').innerText; // Usamos innerText para obtener el texto sin HTML
        navigator.clipboard.writeText(resultadoTexto)
            .then(() => {
                //alert('Texto copiado al portapapeles');
            })
            .catch(err => {
                console.error('Error al copiar el texto: ', err);
            });
    });
const botonCambiarModo = document.getElementById('cambiarModo');
const body = document.body;

botonCambiarModo.addEventListener('click', () => {
    body.classList.toggle('modo-oscuro');
});
});