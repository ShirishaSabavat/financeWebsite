const fullName = document.getElementById("fullName");
const emailId = document.getElementById("emailId");
const password = document.getElementById("password");
const phnNo = document.getElementById("phnNo");
const aadharNo = document.getElementById("aadharNo");
const personPhoto = document.getElementById("personPhoto");
const address = document.getElementById("address");
                
let data={
    fullName =fullName.innerText,
    password = password.innerText,
    emailId = emailId.innerText,
    phnNo = phnNo.innerText,
    aadharNo=aadharNo.innerText,
    personPhoto=personPhoto.innerText,
    address= address.innerText,
    
};

let options={
    method: "POST",
    body: JSON.stringify(data)
}

fetch("/" ,options).then(function(response){
    return response.json();
})
.then(function(jsonData){
    console.log(jsonData);
});