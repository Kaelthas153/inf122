function agregarTarea()
{
    var tarea = document.getElementById("tarea").value;
    var nuevoItem = document.createElement("li");
    nuevoItem.textContent = tarea;
    document.getElementById("tarea").appendChild(nuevoItem);
    document.getElementById("tarea").value="";
}