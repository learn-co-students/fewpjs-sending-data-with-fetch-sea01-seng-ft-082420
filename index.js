// Add your code here
// fetch(destinationURL, configurationObject);
// fetch('http://localhost:3000/dogs', configurationObject = {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//     },
//     body: JSON.stringify({
//         dogName: "Byron",
//         dogBreed: "Poodle"
//     })
// })
// let name = ""
// let email = ""

// let formData = {
//     name = "",
//     email = ""
// };
   
// let configObj = {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json"
//     },
//     body: JSON.stringify({
//         name: name.value,
//         email: email.value
//       })
// };

function submitData(name, email) {
    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({name,email})
    };
    return fetch("http://localhost:3000/users", configObj)
    .then(function(response) {
        return response.json();
    })
    .then(function(object) {
        document.body.innerHTML = object.id;
    })
    .catch(function(error) {
        alert("Warning!");
        document.body.innerHTML = error.message;
    })
}
