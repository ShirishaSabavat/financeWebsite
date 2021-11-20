const fullName = document.getElementById("fullName");
const password = document.getElementById("password");
const emailId = document.getElementById("emailId");
const phnNo = document.getElementById("phnNo");
const address = document.getElementById("address");
const referrence = document.getElementById("referrence");
const personPhoto = document.getElementById("personPhoto");
const panNo = document.getElementById("panNo");
//const panPhoto = document.getElementById("panPhoto");
const aadharNo = document.getElementById("aadharNo");
//const aadharPhoto = document.getElementById("aadharPhoto");
        
let data={
    fullName =fullName.innerText,
    password = password.innerText,
    emailId = emailId.innerText,
    phnNo = phnNo.innerText,
    address= address.innerText,
    referrence=referrence.innerText,
    personPhoto=personPhoto.innerText,
    panNo=panNo.innerText,
    //panPhoto=panPhoto.innerText,
    aadharNo=aadharNo.innerText,
    //aadharPhoto=aadharPhoto.innerText
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