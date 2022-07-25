const tareas = [{
        id: 1658447679863,
        nombre: "Pasear a Fifi",
        terminada: true
    },
    {
        id: 1658447679864,
        nombre: "Estudiar js",
        terminada: false
    },
    {
        id: 1658447679865,
        nombre: "Comprar alimentos",
        terminada: false
    }
]
const tareasTabla = document.querySelector("#grillaTareas tbody")
const realizadas = document.querySelector(".realizadas")
const total = document.querySelector(".total")
const btnAgregarTarea = document.querySelector("#btnAgregarTarea")
const txtTarea = document.querySelector("#txtTarea")

const reInicializar = (listTareas) => {
    let html = ""

    listTareas.forEach(tarea => {
        if (tarea.terminada) {
            html +=
                `
                      <tr>
                          <th scope="row">${tarea.id}</th>
                          <td class="text-muted">${tarea.nombre} <span class="text-success">(Terminada)</span></td>
                          <td>
                              <input type="checkbox" onclick="handleCheckbox(${tarea.id})" checked />
                              &nbsp;
                              <img src="assets/img/401036.png" alt="Eliminar" onclick="handleDelete(${tarea.id})" />
                          </td>
                      </tr>
            `
        } else {
            html +=
                `
                      <tr>
                          <th scope="row">${tarea.id}</th>
                          <td>${tarea.nombre}</td>
                          <td>
                              <input type="checkbox" onclick="handleCheckbox(${tarea.id})" />
                              &nbsp;
                              <img src="assets/img/401036.png" alt="Eliminar" onclick="handleDelete(${tarea.id})" />
                          </td>
                      </tr>
            `
        }
    })

    tareasTabla.innerHTML = html
    realizadas.innerHTML = tareas.filter(tarea => tarea.terminada === true).length
    total.innerHTML = tareas.length
}
const handleCheckbox = id => {
    tareas.forEach((tarea) => {
        if (tarea.id === id) {
            tarea.terminada = !tarea.terminada
        }
    })
    reInicializar(tareas)
}
const handleDelete = id => {
    tareas.forEach((tarea, index) => {
        if (tarea.id === id) {
            tareas.splice(index, 1)
        }
    })
    reInicializar(tareas)
}

reInicializar(tareas)
btnAgregarTarea.addEventListener("click", () => {
    if (!txtTarea.value.trim()) {
        alert("Debe ingresar una tarea antes de agregarla")
    } else {
        tareas.unshift({
            id: Date.now(),
            nombre: txtTarea.value,
            terminada: false
        })
        reInicializar(tareas)
    }
    txtTarea.value = ""
})