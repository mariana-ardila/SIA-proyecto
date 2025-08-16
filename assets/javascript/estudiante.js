// function menuPrincipal(){
//     console.clear();
//     let opcion = prompt(
//         "===== MENÚ PRINCIPAL =====\n" +
//         "1. Login\n" +
//         "2. Contacto\n" +
//         "3. Nosotros\n" +
//         "Seleccione una opción:"
//     );

//     if (opcion == "1"){
//         login();
//     }else if (opcion == "2"){
//         contacto();
//     }else if (opcion == "3"){
//         nosotros();
//     }else {
//         alert("Opción no válida.");
//         mostrarMenu();
//     }
        
//}
let semestreSeleccionado = "";
let materiaSleccionada = "";
let notas = [];

function menuEstudiante(){
    console.clear();
    let opcion = prompt(
        "=== MENÚ ESTUDIANTE ===" +
        "1. Escoger semestre y materia\n" +
        "2. Ver notas\n" +
        "3. Boletín semestre y materia\n" +
        "4. Cerrar sesión\n" +
        "Seleccione una opción:"
    );

    if (opcion == "1") {
        escogerSemestreMateria();
    }else if (opcion == "2"){
        verNotas();
    } else if(opcion == "3"){
        verBoletin();
    }else if (opcion == "4"){
        mostrarMenu();
    }else {
        alert("Opción no válida.");
        menuEstudiante();
    }

    function escogerSemestreMateria(){
        semestreSeleccionado = prompt("Ingrese el semestre: ");

        let materiasSemestre = {
            1: ["Matematicas I", "Programación I", "Inglés I"],
            2: ["Matematicas II", "Programación II", "Ingles II"],
            3: ["Estadistica", "Estructura de datos", "Bases de datos"]
        };

        let lista = materiasSemestre[semestreSeleccionado];
        if(!lista){
            alert ("Semestre no válido.");
            return menuEstudiante();
        }

        let materia = parseInt(prompt(
            "Seleccione una materia:\n" +
            lista.map((m, i) => (i + 1) + " . " + m).join("\n")
        ));

        materiaSeleccionada = lista[parseInt(materia) - 1];
        if (!materiaSeleccionada) {
            alert("Opción inválida.");
            menuEstudiante();
            return;
        }

        //Simulación de notas cargadas automáticamente 
        notas = [3.5, 4.5, 4.2];
        alert("Materia seleccionada:" + materiaSeleccionada + "\nNotas cargadas automáticamente");
        menuEstudiante();
    }

    function verNotas(){
        if (!materiaSeleccionada){
            alert("Primero debe escoger un semestre y una materia.");
            menuEstudiante();
            return;
        }
        alert("Notas de " + materiaSeleccionada + "\n" + notas.join(" , "));
        menuEstudiante();
    }

    function verBoletin(){
        if (!materiaSeleccionada){
            alert("No hay materia seleccionada.");
            menuEstudiante();
            return;
        }
        let suma = 0;
        for (let n of notas) suma += n;
        let promedio = suma / notas.length;
        alert(
            "Boletín:\nSemestre: " + semestreSeleccionado +
            "\nMateria: " + materiaSeleccionada +
            "\nPromedio: " + promedio.toFixed(2)
        );
        menuEstudiante();
    }


}
window.onload = menuEstudiante;
