if (localStorage.getItem("content")===null){
    console.log("changes  empty storage")
    localStorage.setItem("content",[])
    let content="";
}
else{
    let todolist=JSON.parse(localStorage.getItem("content"))
    console.log("changes")
    let content="";
    if(todolist){
        for (let i=0;i<todolist.length;i++){
            let {name,duedate}=todolist[i];
            content+=`
                <span class="display-content"> ${name}</span>
            <span class="display-content"> ${duedate}</span>
            <button id="delete-button" onclick="todolist.splice(${i},1);;display();">Delete</button>`;
    }
    }
    

}

let displayelement=document.querySelector("#container");
displayelement.innerHTML=content;



function additem(){
    let todo=document.querySelector("#input-todo");
    let value=todo.value; 
    let datevalue=document.querySelector("#input-date");
    let date=datevalue.value;
    if( value && date){
        todolist.push({name:value,duedate:date});
        todo.value="";
        datevalue.value="";
        display();

    }
    else{
        alert("please enter a valid Input or Date")
    }
    
    
}


function local(){
    localStorage.setItem("content",JSON.stringify(todolist))
}


function display(){
    let displayelement=document.querySelector("#container");
    let content="";
    
    for (let i=0;i<todolist.length;i++){
        let {name,duedate}=todolist[i];
        content+=`
            <span class="display-content"> ${name}</span>
            <span class="display-content"> ${duedate}</span>
            <button id="delete-button" onclick="todolist.splice(${i},1);;display();">Delete</button>`;
    }
    local()
    displayelement.innerHTML=content;
}