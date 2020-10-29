

function ShowBlock(event) {
    
    
    let contents = document.getElementsByClassName("content")

    for(let content of contents){
        
        console.log(event.target.parentElement.parentElement.getElementsByTagName("div")[0])
        if(event.target.parentElement.parentElement.getElementsByTagName("div")[0] != content){
            content.style.display = "none"
            content.style.opacity=0
        }
    }
    
    let div = event.target.parentElement.parentElement.getElementsByTagName("div")[0];
    if(div.style.display === "none"){
        div.style.display = "";
        setTimeout(()=>{
            div.style.opacity = 1;
        },30)
    }
    else{
        div.style.opacity = 0
        setTimeout(()=>{
            div.style.display = "none"
        },200)
    }
}


var tooltip = document.getElementsByClassName("tooltip");

document.addEventListener('mousemove', fn, false);

function fn(e) {
    for (var i=tooltip.length; i--;) {
        tooltip[i].style.left = e.pageX + 'px';
        tooltip[i].style.top = e.pageY + 'px';
    }
}

let rates = [4,5,3,3]


  window.onload = () => {
      console.log('hamid');
    let skills = document.getElementsByClassName("competences");
    for (let j=0;j<skills.length;j++) {
        for (let i = 0; i < rates[j]; i++) {
            let star = document.createElement("i");
            star.setAttribute("class", "fa fa-star");
            skills[j].appendChild(star);
        } 
    }
  };
