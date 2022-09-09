

let btn = document.querySelector("#btn");
let dataBox = document.querySelector("#dataBox");


btn.addEventListener("click", async() => {
  let randomNumber = Math.ceil(Math.random() * 100);

  fetch(`https://swapi.dev/api/people/${randomNumber}/?format=json`)
    .then((response) => response.json())
    .then((data) =>{
        dataBox.innerHTML = `
        <div class="name">Name : ${data.name} </div>
        <div class="height">Height : ${data.height}</div>
        <div class="hairColor">Hair color : ${data.hair_color}</div>
        <div class="gender">Gender : ${data.gender}</div>
        <div class="eyecolor">Eye color : ${data.eye_color}</div>
        <div class="birth">Birth year : ${data.birth_year}</div>
        <hr/>
        `;
    });

});
