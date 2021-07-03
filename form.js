var firebaseConfig = {
    apiKey: "AIzaSyAVV9Tovmh1dqm368Q9KvHGVChbT1ustDM",
    authDomain: "portfolio-feedback-form.firebaseapp.com",
    projectId: "portfolio-feedback-form",
    storageBucket: "portfolio-feedback-form.appspot.com",
    messagingSenderId: "5942293526",
    appId: "1:5942293526:web:f7c65962210e0d9a9b3137"
};

firebase.initializeApp(firebaseConfig);

let details=firebase.database().ref("clients");

document.querySelector(".contactForm").addEventListener("submit",submitForm);
function submitForm(e){
    e.preventDefault();
    let name=document.getElementById("clientName").value;
    let clientDesg=document.getElementById("clientDesg").value;
    let contactType=document.getElementById("contactType").value;
    let clientMail=document.getElementById("clientMail").value;
    let clientAdd=document.getElementById("clientAdd").value;
    let clientMsg=document.getElementById("clientMsg").value;
    saveDetails(name,clientDesg,contactType,clientMail,clientAdd,clientMsg);
    alert("Thanks for contacting\nIf it's urgent drop a text on my social accounts\nElse I would try to get to you as soon as possible.");
}
function saveDetails(name,clientDesg,contactType,clientMail,clientAdd,clientMsg){
    let newClient=details.push();
    newClient.set({
        name:name,
        clientDesg:clientDesg,
        contactType:contactType,
        clientMail:clientMail,
        clientAdd:clientAdd,
        clientMsg:clientMsg
    });
}