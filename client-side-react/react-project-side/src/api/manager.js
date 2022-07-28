const axios = require('axios').default;
const url = new URL('http://localhost:3000/account/login')

export function getUsers() {
    
    fetch(`http://localhost:3000/users`)
      .then((response) => response.json())
      .then((response) => console.log(response))

    .catch((err) => {
        console.log(err);
      });
}

export function signManager(emailAddress,password){
     if(emailAddress === '' || password === ''){
      alert('Please enter a valid email address and password');
     }
     else{
          axios.post(url, {
            emailAddress:emailAddress,
            password:password
           })
           .then((response) =>{
               return response.data;
           })
           .then((data) =>{
             if(data.id){
                 window.location.href="http://localhost:3000/users";
             }
         })
           .catch(function (error) {
             return error;
           });
     }
     console.log('signed in!')

}
