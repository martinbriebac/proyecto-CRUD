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
            <td><button type="button" class="btn btn-primary editar"><i class="fa-regular fa-pen-to-square"></i></button></td>
            <td><button type="button" class="btn btn-danger borrar" id="${tarea.id}"><i class="fa-regular fa-trash-can"></i></button></td>
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
    
    let botonBorrar = Array.from(document.getElementsByClassName('btn btn-danger borrar'))
    botonBorrar.forEach((button)=>{
        botonBorrar.addEventListener('click', (event) => console.log(event.target.getAttribute('elemento')))
    })
    
    function borrarTarea(id){
        botonBorrar.setAttribute('elemento', id)
        let listaGuardada = localStorage.getItem('lista')
        if(listaGuardada == null){
            listaTareas = []
        }else{
            listaTareas = JSON.parse(listaGuardada)
        }
        let id1 = parseInt(id)
        listaTareas = listaTareas.filter(element => element.id !== id1)
        localStorage.setItem('lista', JSON.stringify(listaTareas))
        listarTarea()
    }
    
    // let botonEditar = Array.from(document.getElementsByClassName('btn btn-danger editar'))
    // botonEditar.forEach((button)=>{
    //     button.addEventListener('click', (event)=>editarTarea(event.target.id))
    // })

    // function editarTarea(id, tarea, responsable){
    //     listaTareas.forEach((element) => {
    //         if(id === element.id){
    //             element.responsable = inputResponsable,
    //             element.tarea = inputTarea
    //         }
    //     })
    // }
    
    document.getElementById('clearList').addEventListener('click', function(event){
        event.preventDefault()
        window.localStorage.removeItem('lista')
        document.getElementById('listaElementos').innerHTML = ''
        listaTareas = []
    })

    listarTarea()
})

