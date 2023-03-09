// handle add task button and add item in incomplete task section;

document.querySelector("#addTask").addEventListener("click", function(event){
    event.preventDefault();
    const newTaskInputValue = document.querySelector("#new-task").value;
    document.querySelector("#new-task").value = "";

    if(newTaskInputValue == ""){
        alert("Please write something!");
    }
    else{

        // create and li and append child
        const taskLi = document.createElement("li");
        const taskInput = document.createElement("input");
        taskInput.type = "checkbox";
        const taskLabel = document.createElement("label");
        taskLabel.innerText = newTaskInputValue;

        taskLi.appendChild(taskInput);
        taskLi.appendChild(taskLabel);

        const taskUl = document.querySelector("#items");
        taskUl.appendChild(taskLi);
    }

    


} )


//add task in delete section function

function addTaskInDeleteSection(task,checkBox){
    task.removeChild(checkBox)

    const deleteButton = document.createElement("button");
    deleteButton.innerText= "Delete";
    deleteButton.className = "delete"
    task.appendChild(deleteButton);
    const deletedUi = document.querySelector(".completed-items");
    deletedUi.appendChild(task);
}


// handle checkbox & add item in delete section

document.querySelector("#items").addEventListener("change", function(event){
    const checkBox = event.target;
    const li = event.target.parentNode;
    const ul =li.parentNode;
    ul.removeChild(li);

    addTaskInDeleteSection(li,checkBox);
})


// handle delete button 

document.querySelector(".completed-items").addEventListener("click", function(event){
    const li = event.target.parentNode;
    console.log(li);
    li.parentNode.removeChild(li);
})



