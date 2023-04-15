const playerName = document.getElementById("player-value");
const searchBtn = document.querySelector(".submit");

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'cf3f1e7826msh21313dd917e952fp1604b6jsnfd95b2cd637c',
      'X-RapidAPI-Host': 'basketapi1.p.rapidapi.com'
    }
  };
const statsFetch = () => {

  fetch(`https://basketapi1.p.rapidapi.com/api/basketball/search/`+ playerName.value, options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
};

searchBtn.addEventListener("click", statsFetch);
