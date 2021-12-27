var user_birth; 
document.querySelector("#date").addEventListener("change",function(){
    var input = this.value;
    if(input[0]+input[1]+input[2]+input[3]<1994){
        alert("less than 1994");
        return false;
    }
});

function displayInfo(){
var user_name = document.querySelector("#name").value;
var user_no = document.querySelector("#ph_no").value;
var user_email = document.querySelector("#email").value;
var pattern = /^\w+@prepbytes.com$/;;
if(user_name == ''){
    alert("name should not be empty");
    return false;
};
if(user_no== ''){
    alert("enter no.")
};
if(user_no.length !== 12 && user_no[0]+user_no[1]!=='91'){
    alert("Enter Valid no start with 91 and 10 digits");
    return false;
}
if(!user_email.match(pattern)){
    alert("Enter valid Email");
}
};


