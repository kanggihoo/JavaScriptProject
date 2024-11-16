
// 0. createHTML 이용
// 1.버튼 클릭시 appendchild 이용
// 2.버튼 클릭 후 input 내용초기화

const btn = document.querySelector(".input button");
const text = document.querySelector(".input input");
const listContainer = document.querySelector(".list-container");
const listContainerLi = document.querySelector(".list-container li");


btn.addEventListener("click" , (e) =>{
    if(text.value === ""){
        alert("plese enter the text!");
    }
    else{
        const listLi = document.createElement("li");
        const div = document.createElement("div");
        const span = document.createElement("span");
        div.innerHTML = text.value;
        span.innerHTML = "\u00d7";
        listLi.appendChild(div);
        listLi.appendChild(span);
        listContainer.appendChild(listLi);
        text.value= "";
        saveData();
    }
    
    
})

listContainer.addEventListener("click" , e => {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        e.target.children[0].classList.toggle("checked");
    }
    else if(e.target.tagName === "DIV"){
        e.target.parentElement.classList.toggle("checked");
        e.target.classList.toggle("checked")
    }
    else if(e.target.tagName === "SPAN"){
        console.log(e.target.parentElement);
        e.target.parentElement.remove();
    }
    saveData();
})


function saveData(){
    localStorage.setItem("data" , listContainer.innerHTML);
}

function showData(){
    listContainer.innerHTML = localStorage.getItem("data");
}


showData();
