document.addEventListener("DOMContentLoaded", function(event){
    let listaTareas = []
    
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

    
    // function editaTarea(id, tarea, responsable){
    //     listaTareas.forEach((element) => {
    //         if(id === element.id){
    //             element.tarea = tarea,
    //             element.responsable = responsable
    //         }
    //     })
    // }

    
    let lista = document.getElementById('listaElementos')

    function listarTarea(){
        lista.innerHTML = ''
        listaTareas.forEach((tarea, index) => {
            lista.innerHTML += `
            <tr>
            <th scope="row">${index+1}</th>
            <td>${tarea.responsable}</td>
            <td>${tarea.tarea}</td>
            <td><button type="button" class="mx-5 btn btn-primary"><i class="fa-regular fa-pen-to-square"></i></button></td>
            <td><button type="button" class="mx-5 btn btn-danger borrar" id=${tarea.id}><i class="fa-regular fa-trash-can"></i></button></td>
            </tr>
            `
            
        })
        
        let botonBorrar = Array.from(document.getElementsByClassName('mx-5 btn btn-danger borrar'))
        botonBorrar.forEach((button)=>{
            button.addEventListener('click', borrarTarea)
        })
    }
    
    let inputResponsable = document.getElementById('responsable')
    let inputTarea = document.getElementById('tarea')
    let addButton = document.getElementById('botonEnviar')
    
    addButton.addEventListener('click', (event)=>agregaTarea(event))
    
    function agregaTarea(event){
        event.preventDefault()
        let id = listaTareas[listaTareas.length-1]?.id || 0;
        let nuevaTarea = {
            id: id+1,
            responsable: inputResponsable.value,
            tarea: inputTarea.value
        }
        listaTareas.push(nuevaTarea)
        listarTarea()
        inputResponsable.value = ''
        inputTarea.value = ''
    }
    
    
    function borrarTarea(){
        listaTareas = listaTareas.filter((id)=>tarea.id!==id)
        listarTarea()
    }
    
    document.getElementById('clearList').addEventListener('click', function(event){
        event.preventDefault()
        window.localStorage.removeItem('lista')
        document.getElementById('listaElementos').innerHTML = ''
        listaTareas = []
    })

})

