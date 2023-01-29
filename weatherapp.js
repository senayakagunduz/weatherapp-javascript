const btn = document.querySelector("#verilerigetir");
const cityInput = document.querySelector("#cityInput");
btn.addEventListener("click", () => {
  getData(cityInput.value);
});

//baseUrl içine name geçicez çünkü getData da name veriyoruz parametre olarak.
function getData(name) {
  const API = "aef00181dee1ab9c2ca43739994a52f0";
  const baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API}&units=metric&lang=tr`;
  console.log(baseUrl);
  fetch(baseUrl)
    .then((res) => res.json())
    .then((data) => {
      const {
        name,
        sys: { country },
        weather: [{ description }],
        main: { temp, feels_like },
      } = data;
      console.log(data);
      const city = document.querySelector("#sehir");
      const temparature = document.querySelector("#sicaklik");
      const weather = document.querySelector("#havadurumu");
      const feel = document.querySelector("#hissedilen");
      city.textContent = `${name},${country}`;
      weather.textContent = `${description}`;
      feel.textContent = `${feels_like}`;
      temparature.textContent = `${temp}`;
    })
    .catch(err=>console.warn(err))
}
