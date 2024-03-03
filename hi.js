let x;
document.getElementById("cal").onclick=function(){

    x = Math.floor(Math.random()*90);

    document.getElementById("ans").textContent=x
}
function clearField(){
    document.getElementById("myint").value=''
    document.getElementById("partint").value=''
    document.getElementById("ans").value=''
}