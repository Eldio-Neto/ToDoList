
var tasks = [];

var myStorage = window.localStorage;



function idGenerator(){
    var timestamp = new Date()

    id = timestamp.getHours().toString() + 
         timestamp.getMinutes().toString() + 
         timestamp.getSeconds().toString();

    return id

}
loadTasks()

function createtask(){
    if(document.getElementById("newtask").value != "" ){
    var taskDescription = document.getElementById("newtask").value

    var task = {

        id: idGenerator(),
        data:{
            description: taskDescription
        }

    } 

    tasks.push(task);
    
    updateScreen()}
    else{
        alert("You must to write something")
    }
    myStorage.setItem("tasks", JSON.stringify(tasks))
}




function updateScreen(){
    var list = "<ul>"

    tasks.forEach((task =>{
        
    list += "<li id-data=" + task.id + ">" + task.data.description + "<button onclick=deleteItem(this) id-data=" + task.id + ">" + "Apagar</button>"       +"</li>"
        
    }))

    list += "</ul>"

    document.getElementById("list").innerHTML = list
    document.getElementById("newtask").value = ""

}


function deleteItem(element){
    
    tasks = tasks.filter(task=> task.id != element.getAttribute("id-data"))
    

    updateScreen()
    myStorage.setItem("tasks", JSON.stringify(tasks))
}


function loadTasks(){

    let tasks_str = myStorage.getItem("tasks")

    if (tasks_str){
        tasks = JSON.parse(tasks_str)
    }

    updateScreen()
}










