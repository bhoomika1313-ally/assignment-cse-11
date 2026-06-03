let input = document.getElementById("intext");
let heading = document.getElementById("head");
let para = document.getElementById("para");
document.getElementById("changetext").addEventListener("click", function(){
    if(input.value !== ""){
        heading.innerHTML = input.value;
    }   });
document.getElementById("changebg").addEventListener("click", function(){
    document.body.style.backgroundColor = "lightblue";
});
let f = 16;
document.getElementById("changefont").addEventListener("click", function(){
    f += 2;
    heading.style.fontSize = f + "px";
});
document.getElementById("hide").addEventListener("click", function(){
    if(para.style.display === "none"){
        para.style.display = "block";   
    } else {
        para.style.display = "none";
    }   });
document.getElementById("reset").addEventListener("click", function(){
    heading.innerHTML = "welcome to java script lab";
    document.body.style.backgroundColor = "white";
    heading.style.fontSize = f;
    para.style.display = "block";
    input.value = "";
});