fetch("").then(userData => {
    return userData.json();
}).then(data => {
    console.log(data);
    if(data.message === 'Success'){
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
        
        fullName.innerText = data.data.fullName;
        password.innerText=data.data.password;
        emailId.innerText=data.data.emailId;
        phnNo.innerText=data.data.phnNo;
        address.innerText = data.data.address;
        referrence.innerText = data.data.referrence;
        personPhoto.innerText = data.data.personPhoto;
        panNo.innerText=data.data.panNo;
        //panPhoto.innerText = data.data.panPhoto;
        aadharNo.innerText = data.data.aadharNo;
        //aadharPhotoinnerText = data.data.aadharPhoto;
    }
}).catch(err => {
    console.log(err);
});
