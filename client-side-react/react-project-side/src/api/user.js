const baseUrl='http://localhost:3000/';

let currentUser;


export function getUserById(_id) {
  
    fetch(`${baseUrl}users/${_id}`)
      .then(response => response.json())
      .then(response=>{
        
        currentUser=response;
        drawUserDetails(response)})
      .catch(error => console.log('error', error));
    
}

function drawUserDetails(currentUser) {
  
    document.getElementById("userId").value=currentUser._id;
    document.getElementById("firstName").value=currentUser.firstName;
    document.getElementById("lastName").value=currentUser.lastName;
    document.getElementById("city").value=currentUser.city;
    document.getElementById("street").value=currentUser.street;
    document.getElementById("houseNumber").value=currentUser.houseNumber;
    document.getElementById("phoneNumber").value=currentUser.phoneNumber;
    document.getElementById("emailAddress").value=currentUser.emailAddress;
    document.getElementById("height").value=currentUser.height;
    document.getElementById("BMI").value=(currentUser.weightsHistory[currentUser.weightsHistory.length-1].weight)/Math.pow(currentUser.height,2)

    currentUser.weightsHistory.forEach(meeting => {
        const tmp=document.getElementsByTagName("template")[0];
        let element=tmp.content.cloneNode(true);
        element.querySelector(".date").innerText=meeting.date;
        element.querySelector(".weight").innerText=meeting.weight;
        const weightsTable=document.getElementById('weights');
        weightsTable.append(element);
    });
}

export function getUserDiary(_id) {

  fetch(`${baseUrl}users/${_id}/diary`)
    .then(response => response.json())
    .then(response => console.log(response))
    .then(response=> console.log(`try to load diary `))
    .catch(error => console.log('error', error));
  
}