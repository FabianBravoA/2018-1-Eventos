//LEER TEXTO LMS DE EVENTO!!!
console.log("El script se cargó");


const cipher = cipherFactory();
//función que se activa cuando la página se carga:
window.onload = () => {   //este código se va a ejecutar si sólo si la página cargó (esto es un evento)
    console.log("Holo, la página se cargó");
    const elBoton = document.getElementById("buttoncillo");
    console.log("El botón es > "+elBoton);
    let updateBoxes = ()=>{
        console.log("Input > "+userInputBox.value);
        if(elBoton.innerText == "CIFRAR"){
            result.value = cipher.encode(userInputBox.value);
        }else{
            result.value = cipher.decode(userInputBox.value);
        }
    }
    elBoton.addEventListener("click", ()=>{  //En HTML es onclick, aquí, sólo click.
        console.log("¡Me hicieron click!");//S/Se ejecutará sólo si se hace la acción (hacer click)
        if(elBoton.innerText == "CIFRAR"){   //innerText es el texto que está en cualquier etiqueta (por ej. el texto "CIFRAR" en:  <button id="buttoncillo">CIFRAR</button>)
            elBoton.innerText = "DESCIFRAR";
        }else{
            elBoton.innerText = "CIFRAR";
        }
        updateBoxes();
    });
    userInputBox.addEventListener("input", ()=>{
        updateBoxes();
    });
};



//La función ya está declarada, sólo se invoca
function cipherFactory(offset = 33) {
    const cipher = {};
    //toDecode = Gastón te echamos de menos
    //split -> ["G", "a", "s", "t", "ó",...];
    cipher.decode = (toDecode) => {
        return toDecode.split("").map((oneChar) => {
            return String.fromCharCode(((oneChar.charCodeAt(0) - 65) - offset + (26 * Math.ceil(offset / 26))) % 26 + 65);
        }).reduce((accString, newChar) => {
            return accString + newChar;
        });
    }

    cipher.encode = (toEncode) => {
        return toEncode.split("").map((oneChar) => {
            return String.fromCharCode(((oneChar.charCodeAt(0) - 65) + offset + (26 * Math.ceil(offset / 26))) % 26 + 65);
        }).reduce((accString, newChar) => {
            return accString + newChar;
        });
    }

    return cipher;
};