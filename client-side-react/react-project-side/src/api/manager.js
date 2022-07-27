// const baseUrl = `http://localhost:3000/`;

 export function getUsers() {
    
    fetch(`http://localhost:3000/users`)
      .then((response) => response.json())
      .then((response) => console.log(response))
    //    .then((response) => { (usersTo = response)})

    .catch((err) => {
        console.log(err);
      });

}
