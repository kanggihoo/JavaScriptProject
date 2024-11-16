const API_KEY = "d5c0a5a7bc3507e7f343ae574843a334";
const button = document.querySelector(".search button")
const input = document.querySelector(".search input")


button.addEventListener("click" , ()=>{
    city_name = input.value;
    get_weatherInfo(city_name);
    
})


// async function get_weatherInfo(city_name){
//     const url = `https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=${API_KEY }`;
// }

async function get_weatherInfo(city_name){
    
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_KEY}&units=metric`;
    const req = await fetch(url);
    if(req.status == 400){
        document.querySelector(".errorMsg").classList.add("true");
        document.querySelector(".info").style.display = "none";

    }
    else{
        document.querySelector(".errorMsg").classList.remove("true");
        const json = await req.json();
        const weather_img = json["weather"][0]["main"];
        console.log(json, weather_img , "./images/"+weather_img.toLowerCase()+".png");
        document.querySelector(".weather .weather__icon").src = "images/"+weather_img.toLowerCase()+".png";
        
        document.querySelector(".weather .temp").innerHTML = json["main"]["temp"]+"°C";
        document.querySelector(".weather .cityName").innerHTML = json.name;
        
        document.querySelector(".detail .col1 .humadity").innerHTML = json["main"]["humidity"]+"%";
        document.querySelector(".detail .col2 .wind").innerHTML =  json["wind"]["speed"]+"km/h";
    
        document.querySelector(".info").style.display = "block";
    }
   
    
}

