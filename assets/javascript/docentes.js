function ingresoDocentes (){
    let opcion =Number(prompt(`**** Bienvenido a SIA **** \n
        Digite una opción:
        1. Notas
        2. Asistencia
        3. Reportes y boletines
        4. Calendario Académico
        5. Actualizar Datos
        6. Salir
    `));
            if (opcion===1 || opcion===2 || opcion===3){
            let asignatura =Number(prompt(`Digite el número de la asignatura correspondiente:\n
            1. Matemática financiera
            2. Matemáticas general
            3. Estadística general
            4. Estadística descriptiva
            5. Estadística inferencial 
            6. Geometría Vectorial
            7. Geometría inferencial
            `
            ))
            let grupo =Number(prompt(`Digite el número del grupo correspondiente:\n
            1. Grupo 1
            2. Grupo 2
            3. Grupo 3
            4. Grupo 4
            `
            ))
                let periodoAcademico =Number(prompt(`Digite el número del periodo académico: \n
            1. Grupo 1
            2. Grupo 2
            3. Grupo 3
            4. Grupo 4
            `
            ))}

            if (opcion===1){
                let notas =[];
            let cantidadNotas=Number(prompt("Ingrese la cantidad de notas a registrar: "))
            for (let i=0; i<cantidadNotas; i++){
                notas[i]=parseFloat(prompt(`Ingrese el valor de la nota: ${i + 1}`))
            }  
            alert("Las notas de los estudiantes son: " + notas);
            } else if(opcion===2){
                let estudianteAsistio=Number(prompt(`¿El estudiante asistió a clase?\n
                    1. Sí
                    2. No`))



                    while(estudianteAsistio!==1 && estudianteAsistio!==2){
                    prompt(`Opción no válida, digite otra opción:\n
                    1. Sí
                    2. No `)}
            }

            if(opcion===3){
                let descargarReportes=Number(prompt(`Descargar el reporte grupal de las notas:\n
                    1. Sí
                    2. No `))
                    while(descargarReportes!==1 && descargarReportes!==2){
                    prompt(`Opción no válida, digite otra opción:\n
                    1. Sí
                    2. No `)}
            }
            if(opcion===4){
                prompt(`Calendario académico`)
            }
            if(opcion===5){

                let nombreProfesor=prompt("Ingrese su nombre: ")
                let apellidosProfesor= prompt("Ingrese sus apellidos: ")
                let cedulaProfesor= prompt("Ingrese su documento de identificación: ")
                let correoProfesor=prompt("Ingrese su correo electrónico: ")
                let telefonoProfesor=Number(prompt("Ingrese su teléfono: "))

                let guardarCambios=Number(prompt(`¿Desea guardar los cambios?\n
                1. Sí
                2. No `))

                while(guardarCambios!==1 && guardarCambios!==2){
                    prompt(`Opción no válida, digite otra opción:\n
                    1. Sí
                    2. No `)}

            }
            
            if (opcion===6){
                  let salirPrograma=Number(prompt(`¿Desea cerrar la sesión?\n
                1. Sí
                2. No `))

                while(salirPrograma!==1 && salirPrograma!==2){
                    prompt(`Opción no válida, digite otra opción:\n
                    1. Sí
                    2. No `)}
            }

}


let menuFunciones => ()

ingresoDocentes();