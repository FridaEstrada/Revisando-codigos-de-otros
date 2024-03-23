const baseEndpoint = "https://api.github.com";
const usersEndpoint = `${baseEndpoint}/users`;
const $name = document.querySelector(".name"); //Corrección de los query selector
const $blog = document.querySelector(".blog");
const $location = document.querySelector(".location");

async function displayUser(username) {
  //agregando async
  $name.textContent = "cargando...";
  try {
    const response = await fetch(`${usersEndpoint}/${username}`); //mandando URL para obtener los datos de usuario
    const data = await response.json();
    const users = data.data;
    return users;
    
} catch (error) {
    console.error( error );
}
  
  console.log(data);
  $name.textContent = "${data.name}";
  $blog.textContent = "${data.blog}";
  $location.textContent = "${data.location}";
}

function handleError() {
  console.log("OH NO!");
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`;
}

const fetch = async (url) => {
  try {
    console.log("Obteniendo datos de usuario de API FETCH");
    const response = await fetch(url);
    const data = await response.json();
    const users = data.data;
    console.log(users);
    return users;
  } catch (error) {
    console.error(error);
  }
};

try {
  //try catch para manejar errores
  displayUser("stolinski");
} catch (error) {
  handleError();
}