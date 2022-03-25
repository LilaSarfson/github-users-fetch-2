let form = document.querySelector("form");

form.addEventListener("submit", async function(event){
    event.preventDefault();
    let userSearch = document.querySelector("#writeUser").value;
    console.log(userSearch);
    let response = await fetch("https://api.github.com/users/" + userSearch);
    let user = await response.json();
    console.log("FUNCIONO" + user);

    //Tabla propiedades user

    let Username = user.login;
    let Avatar = user.avatar_url; //Es una photo
    let Bio = user.bio;
    let Url = user.html_url;

    console.log(Url);
    //tabla

    if(response.ok){
    let crearRow = document.createElement("tr");
    crearRow.innerHTML = `
    <td>${Username} </td>
    <td><img src="${Avatar}" alt=""> </td>
    <td>${Bio} </td>
    <td> ${Url}</td>
    `
    document.querySelector("#bodyTable").appendChild(crearRow);
    }
    else{
        // alert("No existe el usario");
        let crearCartel = document.createElement("h1");
        crearCartel.textContent= "Ese usuario no existe";
        crearCartel.style.backgroundColor = "red";
        let ponerCartel = form.appendChild(crearCartel);

        function quitarCartel(){
            ponerCartel.style.display = "none";
        }


        setTimeout(quitarCartel, 3000);
    }
})