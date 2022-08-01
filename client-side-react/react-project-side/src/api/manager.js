const axios = require('axios').default;
const url = new URL('http://localhost:3000/account/login')

const  getUsers =async()=> {
    
 var response= await  fetch(`http://localhost:3000/users`)
 debugger
 if(response.status==200&&response.ok) {
  var data=await response.json()
 }
    //   .then((response) => response.json())
    //   .then((response) => console.log(response))
    // .catch((err) => {
    //     console.log(err);
    //   });
    return data;
}
export default getUsers;

