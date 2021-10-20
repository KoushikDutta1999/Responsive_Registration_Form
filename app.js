const emailId = document.getElementById('email-id');
const errorMsg = document.getElementById('errormsg');
const icon = document.getElementById('icon');

let mailRegex = /^[a-zA-Z][a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}$/;

function checker(){
    icon.style.display="inline-block";
    if(emailId.Value.match(mailRegex)){
        icon.innerHTML = '<i class = "fas fa-check-circle"></i>';
        icon.style.color = '#2ecc71';
        errorMsg.style.display = 'none';
        emailId.style.border = '2px solid #2ecc71';
    }
    else if(emailId.value ==""){
        icon.style.color = 'none';
        errorMsg.style.display = 'none';
        emailId.style.border = '2px solid #2dld3d4';
    }
    else{
        icon.innerHTML = '<i class = "fas fa-exclamation-circle"></i>';
        icon.style.color = '#ff2851';
        errorMsg.style.display = 'block';
        emailId.style.border = '2px solid #ff2851';
    }
}