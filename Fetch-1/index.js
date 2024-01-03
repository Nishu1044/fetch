function fetchUserData(){
    fetch("https://reqres.in/api/users")
      .then(res => {
         if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
         }
         return res.json();
      })
      .then(data => {
         console.log('Users data:', data);
        Display(data);
      })
      .catch(error => {
         console.error('Error fetching users:', error);
      });
   }

   

   function Display(userData){
    
    const WebpageContainer = document.getElementById("DisplayData");
    WebpageContainer.innerHTML = "";


    userData.data.forEach(element => {
      
        let boxdiv = document.createElement("div");
        boxdiv.innerHTML = `<h1>${element.first_name}</h1>
        <p>${element.email}</p>
        <img src="${element.avatar}" alt="">`

        WebpageContainer.appendChild(boxdiv)
    });
    
   }


//    function Display(userData){
//     const WebpageContainer = document.getElementById("DisplayData");
//     WebpageContainer.innerHTML = "";

//     userData.data.forEach(element => {
//         let boxdiv = document.createElement("div");
//         boxdiv.innerHTML = `<h1>${element.first_name}</h1>
//         <p>${element.email}</p>
//         <img src="${element.avatar}" alt="">`;
//         WebpageContainer.appendChild(boxdiv);
//     });
// }



   
