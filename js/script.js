// La idea podría ser la siguiente 
// - Manejador de click en el botón "Obtener Chiste"
// - Una función para obtener un chiste de Chuck Norris desde la API
// - Una función para renderizar la lista de chistes en el DOM
// - Una función para guardar la lista de chistes en localStorage
// - Una función para cargar la lista de chistes desde localStorage


const fetchJokeBtn = document.getElementById("fetchJoke");
const jokeList = document.getElementById("jokeList");

let jokes = JSON.parse(localStorage.getItem("jokes")) || [];

jokes.forEach((joke) => {
  const li = document.createElement("li");
  li.textContent = joke;
  jokeList.appendChild(li);
});

fetchJokeBtn.addEventListener("click", async () => {
  const res = await fetch("https://api.chucknorris.io/jokes/random");
  const data = await res.json();

  jokes.push(data.value);
  localStorage.setItem("jokes", JSON.stringify(jokes));

  const li = document.createElement("li");
  li.textContent = data.value;
  jokeList.appendChild(li);
});