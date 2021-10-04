function displayTemperature(response) {
  console.log(response.data);
}

let apiKey = "c1453afb57d8b9379877dfdab6cd3483";
let apiUrl = `htpps://api.openweathermap.org/data/2.5/weather?q=New York,&appid=${apiKey}&units=metric`;
console.log(apiUrl);

axios.get(apiUrl).then(displayTemperature);
