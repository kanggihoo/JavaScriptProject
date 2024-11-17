const Btn = document.querySelector(".NoteBtn");
const NotePage = document.querySelector(".NotePage");
Array.from(Btn.children).forEach(x => {
    
    x.addEventListener("click" , e => {
        const target = e.target;
        const div = document.createElement("div");
        const icon = document.createElement("i");
        // let div = document.createElement()
        
        if(target.innerHTML == "Success"){
            icon.classList.add("fa-solid" , "fa-check");
            div.appendChild(icon);
            div.classList.add("success");
            div.innerHTML += "Success!!";
            NotePage.appendChild(div);
        }
        else if(target.innerHTML == "Error"){
            icon.classList.add("fa-solid", "fa-xmark");
            div.appendChild(icon);
            div.classList.add("error");
            div.innerHTML += "Please fix the error!";
            NotePage.appendChild(div);
        }
        else if(target.innerHTML =="Invalid"){
            icon.classList.add("fa-solid", "fa-exclamation");
            div.appendChild(icon);
            div.classList.add("invalid");
            div.innerHTML += "Invalid input, check again";
            NotePage.appendChild(div);
        }
        setTimeout(()=>{
            div.remove();
        } , 3000);
        
    })      
});



// const div = document.createElement("div");
