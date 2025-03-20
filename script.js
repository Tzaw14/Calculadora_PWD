const pantalla = document.querySelector('.pantalla');  
const botones = document.querySelectorAll('.btn');  

botones.forEach(boton => {  // recorre todos los numeros (botones)
    boton.addEventListener('click', () => {  // detecta cuando se presiona un boton
        const valor = boton.textContent;  // se obtiene el "texto"/Numeros seleccionados

        if (valor === 'C') {  
            pantalla.textContent = '0';  // muestra 0 cuando se presiona "C" (borra)
        } else if (valor === '←') {  
            pantalla.textContent = pantalla.textContent.slice(0, -1) || '0'; // Se borra el ultimo numero, si esta 0, no borra
        } else if (valor === '=') {  
            try {  
                pantalla.textContent = eval(pantalla.textContent);  // se evalua la operacion para ver si no es valida
            } catch {  
                pantalla.textContent = 'Error';  // Si no es valida, se, Muestra error, si sale error 2 veces se muestra: function Error() { [native code] }
            }  
        } else {  
            if (pantalla.textContent === '0') {  
                pantalla.textContent = isNaN(valor) ? pantalla.textContent + valor : valor;  //Se evalua si se presiona un numero y reemplaza el 0
            } else {  
                pantalla.textContent += valor;  //Muestra el valor del numero presionado
            }  
        }  
    });  
});