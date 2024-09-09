let nombre1 = document.getElementById('nombre');
let dispositivo1 = document.getElementById('dispositivo');
let agregar1 = document.getElementById('agregar');
let limpiar = document.getElementById('limpiar');
let apple = document.getElementById('appleradio')
let samsung = document.getElementById('samsungradio');
let cont1 = document.getElementById('container-one');
let cont2 = document.getElementById('container-two');
let arriba = document.getElementById('boton-arriba');
let abajo = document.getElementById('boton-abajo');
let eliminar = document.getElementById('eliminar');
let formulario = document.getElementById('form');

//validacion de los campos
agregar1.addEventListener('click',(event)=>{
    event.preventDefault()
    verificarCampos(nombre1, dispositivo1)
    addUser(nombre1, dispositivo1, apple, samsung)
});

function verificarCampos(camponombre, campodispositivo) {

    let valornombre = camponombre.value;
    let valordispositivo = campodispositivo.value;

    if (valornombre === '' || valordispositivo === '' || apple.checked === false && samsung.checked === false) {
        alert('Debes llenar todos los campos.'); 
    } else{
        return;
    }
}5

//funcion de añadir al usuario

function addUser(nombre1, dispositivo1, apple, samsung) {
    if (apple.checked) {
        let appleValue = `${nombre1.value} - ${dispositivo1.value}`;
        let newOption = document.createElement("option");
        newOption.textContent = appleValue;
        cont1.appendChild(newOption);
    } else if (samsung.checked) {
        let samsungValue = `${nombre1.value} - ${dispositivo1.value}`;
        let newOption = document.createElement("option");
        newOption.textContent = samsungValue;
        cont2.appendChild(newOption);
    }
}

//funcion de mover elemento a la izq y derecha

arriba.addEventListener('click', () => {
    let appleOptions = cont2.options[cont2.selectedIndex];
    if (appleOptions) {
        confirm('Confirmar cambio de dispositivo')
        if (confirm) {
            cont1.appendChild(appleOptions)
        } else {
            return;
        }
    }
});

abajo.addEventListener('click', () => {
    let samsungOptions = cont1.options[cont1.selectedIndex];
    if (samsungOptions) {
        confirm('Confirmar cambio de dispositivo')
        if (confirm) {
            cont2.appendChild(samsungOptions)
        } else {
            
            return;
        }
    }
});

//funcion de eliminar el elemento

eliminar.addEventListener('click', () => {
    let appleOptions = cont1.options[cont1.selectedIndex];
    let samsungOptions = cont2.options[cont2.selectedIndex];
    if (appleOptions) {
        appleOptions.remove();
        
    } else if (samsungOptions) {
        samsungOptions.remove();
    }
});

