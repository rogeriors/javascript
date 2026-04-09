https://www.tutorialspoint.com/article/difference-between-local-storage-session-storage-and-cookies-in-javascript

//Salvamento Local

localStorage.setItem("name", "Rogério")

console.log(localStorage.getItem("name"))

//Salvamento em Sessão

sessionStorage.setItem("preferencia", "Gol")

console.log(sessionStorage.getItem("preferencia"))

// Cookies

document.cookie = "name=Rogério"

let user = document.cookie.getItem("name")

console.log(user)