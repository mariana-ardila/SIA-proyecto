function contactanos(){

    alert(`Nos emociona mucho saber que estás interesado en SIA,
         ¡Dejános tu datos!, te estaremos contactando en menos de 1 hora.`)

let nombreCliente=prompt(`Digite su nombre: `);
let emailCliente=prompt(`Digite su correo electrónico: `);
let asunto=prompt(`Digite su celular: `);
let descripcion=prompt(`Digite la descripción: `);

let enviarInfo=Number(prompt(`¿Desea enviar el mensaje?\n
    1.Sí.
    2.No.`))

     while(isNaN(enviarInfo)||(enviarInfo!==1 && enviarInfo!==2)){
            enviarInfo=Number(prompt(`Opción no válida, ¿Desea enviar el mensaje?\n
                1. Sí
                2. No `))}

            if(enviarInfo==1){
                alert("¡Mensaje enviado correctamente!")
            }
        }


contactanos();