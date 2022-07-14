document.addEventListener("DOMContentLoaded", function(event){
    let listaTareas = []

    
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
            <td>
            <div class="form-check form-switch justify-content-end">
            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
            <label class="form-check-label" for="flexSwitchCheckDefault">Tarea completada</label>
            </div>
            </td>
            <td><button type="button" class="btn btn-primary"><i class="fa-regular fa-pen-to-square"></i></button></td>
            <td><button type="button" class="btn btn-danger borrar" id=${tarea.id}><i class="fa-regular fa-trash-can"></i></button></td>
            </tr>
            `
            
        })
        
        let botonBorrar = Array.from(document.getElementsByClassName('btn btn-danger borrar'))
        botonBorrar.forEach((button)=>{
            button.addEventListener('click', (event)=>borrarTarea(event.target.id))
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
    
    
    function borrarTarea(id){
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

