let listaTareas = []

function agregaTarea(tarea, responsable){
    let id = listaTareas[listaTareas.length-1]?.id || 0;
    let nuevaTarea = {
        id: id+1,
        tarea: tarea,
        responsable: responsable,
    };
    listaTareas.push(nuevaTarea)
    console.log(listaTareas)
}

function imprimeTarea() {
    console.log(listaTareas)
}

function editaTarea(id, tarea, responsable){
    listaTareas.forEach((element) => {
        if(id === element.id){
            element.tarea = tarea,
            element.responsable = responsable
        }
    })
}

function eliminarTarea(id){
    let filtrado = listaTareas.filter(element => element.id !== id)
    listaTareas = filtrado
}

