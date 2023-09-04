let input = document.getElementById("input");
let list = document.getElementById("list");

function add(){
    if(input.value===''){
        alert("please add a text")
    }
    else{
        let li=document.createElement("li");
        li.innerHTML = input.value;
        list.appendChild(li);
        save();

        let span = document.createElement("span");
        span.innerHTML="\u00d7"
        li.appendChild(span)
        save();
    }
    input.value='';
    save();
}

// * when you use target,tagNAme=="LI or SPAN or Anything" it will always in the capital letter 

list.addEventListener("click",function(e){

    if(e.target.tagName==="LI"){
        e.target.classList.toggle("check")
        save();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        save();
    }
},false)

// ***********to save the data after refereshment of the website

function save(){
    localStorage.setItem("data",list.innerHTML)
}
// display the data after refershment
function display(){
    list.innerHTML=localStorage.getItem("data")
}
display();