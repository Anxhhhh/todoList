let inputBox = document.querySelector("input");
let listContainer = document.querySelector("ul");
let btn = document.querySelector("button");
let totalSpan = document.querySelector(".total");
let doneSpan = document.querySelector(".done");


let totalTask = 0; 
let doneTask =0;
let doneFlag =0; 


let isDone = true;


btn.addEventListener("click", function(){
    if(inputBox.value === ''){
        alert("you have to enter something");
    }else{
        totalTask++;
        totalSpan.textContent = totalTask;
        let li = document.createElement("li");
        li.textContent = inputBox.value; 
        listContainer.appendChild(li);

        
        let doneBtn = document.createElement("button");
        doneBtn.textContent = "Done";
        doneBtn.classList.add("doneBtn")
        doneBtn.addEventListener("click", ()=>{
            doneTask++;
            doneSpan.textContent = doneTask;
            li.style.textDecoration = "line-through";
            isDone = false;
            doneBtn.disabled = true;
        })
    
        let delBtn = document.createElement("button");
        delBtn.textContent = "Delete";
        delBtn.classList.add("delBtn");
        delBtn.addEventListener("click", ()=>{
            if(!isDone){
                doneTask--;
                doneSpan.textContent = doneTask;
            }
            totalTask--; 
            totalSpan.textContent = totalTask;
            listContainer.removeChild(li);
        })




        li.appendChild(doneBtn);
        li.appendChild(delBtn);





    }
})