var firebaseConfig = {
    apiKey: "api-key",
    authDomain: "obtain-from-firebase",
    projectId: "name-of-your-project",
    storageBucket: "obtain-from-firebase",
    messagingSenderId: "5942293526",
    appId: "your-api-id"
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
