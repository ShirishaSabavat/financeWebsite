fetch("https://financeapp.koushilmankali.com/bussiness-profile").then(bussinessData => {
    return bussinessData.json();
}).then(data => {
    console.log(data);
    if(data.message === 'Success'){
        // const companyLogo = document.getElementById("logo");
        const bussinessName = document.getElementById("bussinessName");
        const address = document.getElementById("address");
        const gstno = document.getElementById("gstno");
        const panno = document.getElementById("panno");
        const aadharno = document.getElementById("aadharno");
        const capital = document.getElementById("capital");

        // companyLogo.innerText = data.data.companyLogo;
        bussinessName.innerText = data.data.companyName;
        address.innerText = data.data.companyAddress;
        gstno.innerText = data.data.gstNo;
        panno.innerText = data.data.panNo;
        aadharno.innerText = data.data.aadharNo;
        capital.innerText = data.data.capitalInvestment;

    }
}).catch(err => {
    console.log(err);
})


