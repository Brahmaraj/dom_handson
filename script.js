var button = document.querySelector('#changebutton').value;
function changeDisplay() {
    if(button==0){
    document.querySelector("#parent").style.display = "block";
    button = 1;
    }
    else if(button==1){
    document.querySelector("#parent").style.display = "flex";
    button =0 ;
    }
    console.log("this button works");
}
var attr = document.querySelectorAll('div[id]');
console.log(attr);