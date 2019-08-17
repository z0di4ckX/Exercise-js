'use strict';

// Fetch (ajax) y pediciones a un servidor / apis rest
var div_usuarios = document.querySelector("#usuarios");
var div_janet = document.querySelector("#janet");

getUsuarios()
    .then(data => data.json())
    .then(users => {
        listadoUsuarios(users.data);

        return getJanet();
    })
    .then(data => data.json())
    .then(user => {
        showJanet(user.data);
    });

    function getUsuarios() {
        return fetch('https://reqres.in/api/users');
    }

    function getJanet() {
        return fetch('https://reqres.in/api/users/2');
    }

    const listadoUsuarios = ( usuarios ) => {

        usuarios.map( ( user, i) => {
            let nombre =  document.createElement('h3');

            nombre.innerHTML = i + ". " + user.first_name + " " + user.last_name;

            div_usuarios.appendChild(nombre);

            document.querySelector(".loading").style.display = 'none';
        }); 
    }

    const showJanet = ( user ) => {

        let nombre =  document.createElement('h4');
        let avatar = document.createElement('img');

        nombre.innerHTML = user.first_name + " " + user.last_name;
        avatar.src = user.avatar;
        avatar.width = '100';
        avatar.border = '2px solid black';
        avatar.boxShadow = '0 2px 3px #444'

        div_janet.appendChild(nombre);
        div_janet.appendChild(avatar);

        document.querySelector("#janet .loading").style.display = 'none';
    }