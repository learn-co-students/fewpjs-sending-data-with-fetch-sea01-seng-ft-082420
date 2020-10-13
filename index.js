// Add your code here
function submitData(name, email){
    let givenData = {
        name: name,
        email: email
    }

    let configObj = {
        method: "POST",
        headers:{
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(givenData)
    }

    return fetch("http://localhost:3000/users", configObj)
        .then(resp => resp.json())
        .then(json => {
            let pId = document.createElement('p');
            pId.textContent = json.id;
            document.body.appendChild(pId);
        })
        .catch(function(error){
            let errorRec = document.createElement('p');
            errorRec.textContent = error.message;
            document.body.appendChild(errorRec);
        });
}