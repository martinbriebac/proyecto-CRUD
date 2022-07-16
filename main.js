document.addEventListener("DOMContentLoaded", function(event){
    let listaTareas = []
    
    
    let lista = document.getElementById('listaElementos')
    
    function listarTarea(){
        let listaGuardada = localStorage.getItem('lista')
            if(listaGuardada == null){
                listaTareas = []
            }else{
                listaTareas = JSON.parse(listaGuardada)
            }
        lista.innerHTML = ''
        listaTareas.forEach((tarea, index) => {
            lista.innerHTML += `
            <tr>
            <th scope="row">${index+1}</th>
            <td>${tarea.responsable}</td>
            <td>${tarea.tarea}</td>
            <td><button type="button" class="btn btn-primary editar" id="${tarea.id}">Editar</i></button></td>
            <td><button type="button" class="btn btn-danger borrar" id="${tarea.id}">Borrar</button></td>
            </tr>
            `
            
        })
        
        let botonBorrar = Array.from(document.getElementsByClassName('borrar'))
        botonBorrar.forEach((button)=>{
            button.addEventListener('click', (event) => borrarTarea(event.target.id))
        })
        let botonEditar = Array.from(document.getElementsByClassName('editar'))
        botonEditar.forEach((button)=>{
            button.addEventListener('click', (event) => editarTarea(event.target.id))
        })
    }
    
    let inputResponsable = document.getElementById('responsable')
    let inputTarea = document.getElementById('tarea')
    
    let addButton = document.getElementById('botonEnviar')
    addButton.addEventListener('click', (event)=>agregaTarea(event))
    
    function agregaTarea(event){
        event.preventDefault()
        let listaGuardada = localStorage.getItem('lista')
        if(listaGuardada == null){
            listaTareas = []
        }else{
            listaTareas = JSON.parse(listaGuardada)
        }
        let id = listaTareas[listaTareas.length-1]?.id || 0;
        let nuevaTarea = {
            id: id+1,
            responsable: inputResponsable.value,
            tarea: inputTarea.value
        }
        listaTareas.push(nuevaTarea)
        localStorage.setItem('lista', JSON.stringify(listaTareas))
        listarTarea()
        inputResponsable.value = ''
        inputTarea.value = ''
    }
    
    function borrarTarea(id){
        listaTareas = listaTareas.filter(element => element.id != id)
        localStorage.setItem('lista', JSON.stringify(listaTareas))
        listarTarea()
    }
    
    
    function editarTarea(id){
        let tareaAEditar = listaTareas.filter((tarea) => tarea.id === id)
        inputResponsable.value = tareaAEditar.responsable
        tarea.value = tareaAEditar.tarea
    }
    
    let updateButton = document.getElementById('botonActualizar')
    updateButton.addEventListener('click', (event)=>actualizarTarea(event.target.id))
    
    function actualizarTarea(id){
        listaTareas.forEach(tarea=>{
            if(tarea.id === id){
                tarea.responsable = responsable.value
                tarea.tarea = tarea.value
            }
        })
    }

    document.getElementById('clearList').addEventListener('click', function(event){
        event.preventDefault()
        window.localStorage.removeItem('lista')
        document.getElementById('listaElementos').innerHTML = ''
        listaTareas = []
    })

    listarTarea()
})

