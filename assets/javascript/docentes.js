alert(`**** Bienvenido a SIA ****`);


function opcionesDocentes (){
    let opcion =Number(prompt(`Digite una opción:\n
        1. Notas
        2. Asistencia
        3. Reportes y boletines
        4. Calendario Académico
        5. Actualizar Datos
        6. Salir`));

        return opcion;
    }

let reportes=()=>{
let reporte= Number(prompt(`¿Desea sacar el reporte de las notas del grupo?\n
            1.Sí
            2.No`));


        if(isNaN(reporte)){
              while(reporte !=1 && reporte !=2){
                reporte=Number(prompt(`Ingrese un valor válido, ¿Desea generar el reporte?\n
            1.Sí
            2.No`));}
            }

         if (reporte==1){
                alert("Reporte generado")}
}

let verCalendario=()=>{
let calendario= Number(prompt(`¿Desea ver el calendario académico?\n
            1.Sí
            2.No`));


            while(isNaN(calendario) || (calendario!=1 && calendario !=2)){
                calendario=Number(prompt(`Ingrese un valor válido, ¿Desea ver el calendario académico?\n
            1.Sí
            2.No`))}
            

         if (calendario==1){
                alert("¡Mostrar calendario!")}
}


let opcion=opcionesDocentes ();
while(opcion>0 || opcion<7){
    
switch(opcion){
    case 1:
        selectGrupo();
         ingresarNotas()
    break;
    case 2:
        selectGrupo();
        ponerAsistencia()
    break;
    case 3:
        selectGrupo();
        reportes();
    break;
    case 4:
        verCalendario();
    break;
    case 5:
        actualizarDatos();
    break;
    case 6:
        cerrarSesionDocentes();
    break;
    default:

}

       opcion=opcionesDocentes ();
}



function selectGrupo(){
            let asignatura =Number(prompt(`Digite el número de la asignatura correspondiente:\n
            1. Matemática financiera
            2. Matemáticas general
            3. Estadística general
            4. Estadística descriptiva
            5. Estadística inferencial 
            6. Geometría Vectorial
            7. Geometría inferencial
            `))

            let grupo =Number(prompt(`Digite el número del grupo correspondiente:\n
            1. Grupo 1
            2. Grupo 2
            3. Grupo 3
            4. Grupo 4
            `))
            
            let periodoAcademico =Number(prompt(`Digite el número del periodo académico: \n
            1. Grupo 1
            2. Grupo 2
            3. Grupo 3
            4. Grupo 4
            `))

}


function ingresarNotas(){

    let nombreEstudiante=prompt("Digite el nombre del estudiante: ")
    let tipoNota=Number(prompt(`Ingrese la clasificación de la nota: \n
        1.
        2.
        3.` ))

    let notas =[];
            let cantidadNotas=Number(prompt("Ingrese la cantidad de notas a registrar: "))
            for (let i=0; i<cantidadNotas; i++){
                notas[i]=parseFloat(prompt(`Ingrese el valor de la nota: ${i + 1}`))
            }  
            alert(`Las notas de los estudiantes son: \n
                ${notas.join(", ")}`);

            alert(`¡Notas ingresadas correctamente!`)

}

function ponerAsistencia(){
        let name=prompt("Ingrese el nombre del estudiante: ");
        let estudiantesAsistio=Number(prompt(`¿${name} asisitió a clases?\n
            1.Sí
            2.No`));


        if(isNaN(estudiantesAsistio)){
              while(estudiantesAsistio !=1 && estudiantesAsistio !=2){
                estudiantesAsistio=Number(prompt(`Ingrese un valor válido, ¿${name} asisitió a clases?\n
            1.Sí
            2.No`));}
            }

         if (estudiantesAsistio==1){
                alert("Asistencia aprobada")}
        else{
            alert(`${name} no asistió a clases`)}
    
    }




function actualizarDatos(){
let datoActualizar=Number(prompt(`¿Qué dato desea actualizar?
    1.Nombre
    2.Apellidos
    3.Tipo de documento
    4.Documento de identificación
    5.Correo electrónico
    6.Teléfono
    `))

    while(isNaN(datoActualizar)|| (datoActualizar<1 || datoActualizar>6)){
         datoActualizar=Number(prompt(`Ingrese un valor válido: `))
    }

    if (datoActualizar==1){
        let nombreProfesor=prompt("Ingrese su nombre: ")
    }
    else if(datoActualizar==2){
        let apellidosProfesor= prompt("Ingrese sus apellidos: ")
    }
    else if(datoActualizar==3){
        let tipoDocumProfesor= prompt("Ingrese su tipo de documento: ")
    }
    else if(datoActualizar==4){
        let documtProfesor=prompt("Ingrese su documento de identificación: ")
    }
    else if(datoActualizar==5){
        let emailProfesor=prompt("Ingrese su correo electrónico: ")
    }
     else if(datoActualizar==6){
        let telefonoProfesor=prompt("Ingrese su teléfono: ")
    }

        let guardarCambios=Number(prompt(`¿Desea guardar los cambios?\n
            1. Sí
            2. No `))

        while(isNaN(guardarCambios)||(guardarCambios!==1 && guardarCambios!==2)){
            guardarCambios=Number(prompt(`Opción no válida, digite otra opción:\n
                1. Sí
                2. No `))}

            if(guardarCambios==1){
                alert("¡Datos actualizados correctamente!")
            }
        }
            
let cerrarSesionDocentes=()=>{
    salida=Number(prompt(`¿Desea cerrar la sesión?\n
        1.Sí
        2.No`))

         while(isNaN(salida)||(salida!==1 && salida!==2)){
            salida=Number(prompt(`Opción no válida, ¿Desea cerrar la sesión?\n
                1. Sí
                2. No `))}
             if(salida==1){
                alert("¡Cerrando la Sesión!")
            }
}

