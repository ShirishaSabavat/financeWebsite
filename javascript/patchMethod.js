// const companyLogo = document.getElementById("logo");
const bussinessName = document.getElementById("bussinessName");
const address = document.getElementById("address");
const gstno = document.getElementById("gstno");
const panno = document.getElementById("panno");
const aadharno = document.getElementById("aadharno");
const capital = document.getElementById("capital");

let data={
    // companyLogo = companyLogo.innerText,
    companyName=bussinessName.innerText,
    companyAddress=address.innerText,
    gstno=gstno.innerText,
    panno=panno.innerText,
    aadharno=aadharno.innerText,
    capital=capital.innerText,
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