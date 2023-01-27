const cityInput = document.querySelector("#cityInput");
const btn = document.querySelector("#verilerigetir");
btn.addEventListener("click", () => {
  //const cityName=cityInput.value;buna ihtiyaç kalmadı
  getData(cityInput.value);
});
//baseUrl içine name geçicez çünkü getData da name veriyoruz parametre olarak.
function getData(name) {  
  const API = "aef00181dee1ab9c2ca43739994a52f0";
  const baseUrl=`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API}&units=metric&lang=tr`
  console.log(baseUrl);

  fetch(baseUrl).then((resp =>resp.json()))
  .then(data=> {
  const {name, sys:{country},weather:[{description}],main:{temp,feels_like}}=data
  console.log(name,description,temp,feels_like,country)
  const city=document.querySelector("#sehir")
  const temparature=document.querySelector("#sicaklik");
  const weather=document.querySelector("#havadurumu")
  const feel=document.querySelector("#hissedilen");
  city.textContent=`${name},${country}`;
  weather.textContent=`${description}`;
  feel.textContent=`${feels_like}`;
  temparature.textContent=`${temp}`
})
  .catch(err=>console.warn(err))
}

