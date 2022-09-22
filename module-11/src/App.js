import "./App.css";
import { useState } from "react";

function App() {
  const [data, setData] = useState({
    loadedCharactor: false,
    name: null,
    height: null,
    homeword: null,
    // films: [],
    image: null,
  });
  const GetNewCharacter = () => {
    let randomNumber = Math.ceil(Math.random() * 88);

    // const url = ` http://swapi.dev/api/people/${randomNumber}/`;
    const url = `https://akabab.github.io/starwars-api/api/id/${randomNumber}.json`;
    fetch(url)
      .then((response) => response.json())
      .then((user) => {
        console.log(user);

        setData({
          loadedCharactor: true,
          name: user.name,
          height: user.height,
          homeworld: user.homeworld,
          // films: user.films,
          image: user.image,
        });
      });
    console.log(data);
  };
  return (
    <>
      <div className="container">
        <button className="btn" onClick={GetNewCharacter}>
          Randomize Character
        </button>
        <hr />
        {data.loadedCharactor && (
          <div className="box">
            <h1>Name : {data.name}</h1>
            <p>Height : {data.height}</p>
            <p>Homeworld : {data.homeworld}</p>
            {/* <ul>
              {data.films.map((film) => {
                return <li>${film}</li>;
              })}
            </ul> */}
            <img id="img" src={data.image} alt=""/>

          </div>
        )}
      </div>
    </>
  );
}

export default App;
