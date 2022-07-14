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

let lista = document.getElementById('listaElementos')

lista.innerHTML = `
<tr>
<th scope="row">1</th>
<td>Mark</td>
<td>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
  Facilis ducimus, quos incidunt nulla eaque fugiat, placeat excepturi eius,
  non doloribus aliquam. Quasi autem itaque, officiis maxime accusamus molestias rerum aut.</td>
<td><button type="button" class="mx-5 btn btn-primary">Editar</button></td>
<td><button type="button" class="mx-5 btn btn-danger">Eliminar</button></td>
</tr>
`
