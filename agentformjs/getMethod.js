fetch("").then(userData => {
    return userData.json();
}).then(data => {
    console.log(data);
    if(data.message === 'Success'){
        const fullName = document.getElementById("fullName");
        const emailId = document.getElementById("emailId");
        const password = document.getElementById("password");
        const phnNo = document.getElementById("phnNo");
        const aadharNo = document.getElementById("aadharNo");
        const personPhoto = document.getElementById("personPhoto");
        const address = document.getElementById("address");
        
        fullName.innerText = data.data.fullName;
        emailId.innerText=data.data.emailId;
        password.innerText=data.data.password;
        phnNo.innerText=data.data.phnNo;
        aadharNo.innerText = data.data.aadharNo;
        personPhoto.innerText = data.data.personPhoto;
        address.innerText = data.data.address;
        
    }
}).catch(err => {
    console.log(err);
})
