document.addEventListener("DOMContentLoaded", function(event){
    let listaTareas = [
    {
    responsable: 'Juan',
    tarea: 'comprar pan'
    },
    {
    responsable: 'Pedro',
    tarea: 'hacer aseo'
    },
    {
    responsable: 'Diego',
    tarea: 'pasear el perro'
    }
    ]
    
    // function agregaTarea(tarea, responsable){
    //     let id = listaTareas[listaTareas.length-1]?.id || 0;
    //     let nuevaTarea = {
    //         id: id+1,
    //         tarea: tarea,
    //         responsable: responsable,
    //     };
    //     listaTareas.push(nuevaTarea)
    //     console.log(listaTareas)
    // }
    
    // function imprimeTarea() {
    //     console.log(listaTareas)
    // }
    
    // function editaTarea(id, tarea, responsable){
    //     listaTareas.forEach((element) => {
    //         if(id === element.id){
    //             element.tarea = tarea,
    //             element.responsable = responsable
    //         }
    //     })
    // }
    
    // function eliminarTarea(id){
    //     let filtrado = listaTareas.filter(element => element.id !== id)
    //     listaTareas = filtrado
    // }
    



    let lista = document.getElementById('listaElementos')
    
    function agregaTarea(){
        listaTareas.forEach((tarea, index) => {
            lista.innerHTML += `
            <tr>
            <th scope="row">${index+1}</th>
            <td>${tarea.responsable}</td>
            <td>${tarea.tarea}</td>
            <td><button type="button" class="mx-5 btn btn-primary">Editar</button></td>
            <td><button type="button" class="mx-5 btn btn-danger">Eliminar</button></td>
            </tr>
            `

        })
    }
    agregaTarea()
    
    document.getElementById('clearList').addEventListener('click', function(event){
        event.preventDefault()
        window.localStorage.removeItem('lista')
        document.getElementById('listaElementos').innerHTML = ''
    })

})