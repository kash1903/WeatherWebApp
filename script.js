const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'b587f5b4d1mshc44ecb0e58b942ep1faa58jsnfd903563c546',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com',
    }
};

const getWeather = (city) => {
    cityName.innerHTML = city;

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => {
            if (!response.ok) {
                throw new Error('Invalid city name');
            }
            return response.json();
        })
        .then(response => {
            temp.innerHTML = response.temp;
            temp2.innerHTML = response.temp;
            feels_like.innerHTML = response.feels_like;
            humidity.innerHTML = response.humidity;
            humidity2.innerHTML = response.humidity;
            min_temp.innerHTML = response.min_temp;
            max_temp.innerHTML = response.max_temp;
            wind_speed.innerHTML = response.wind_speed;
            wind_speed2.innerHTML = response.wind_speed;
            wind_degrees.innerHTML = response.wind_degrees;
            sunrise.innerHTML = response.sunrise;
            sunset.innerHTML = response.sunset;
        })
        .catch(err => {
            console.log(err);
            temp.innerHTML = 0;
            temp2.innerHTML = 0;
            feels_like.innerHTML = 0;
            humidity.innerHTML = 0;
            humidity2.innerHTML = 0;
            min_temp.innerHTML = 0;
            max_temp.innerHTML = 0;
            wind_speed.innerHTML = 0;
            wind_speed2.innerHTML = 0;
            wind_degrees.innerHTML = 0;
            sunrise.innerHTML = 0;
            sunset.innerHTML = 0;
            alert("Enter Correct name");
        });
}

submit.addEventListener("click", (e) => {
    e.preventDefault();
    getWeather(city.value);
});

getWeather("Pilani")

const cities=['delhi','kolkata','Chennai','Mumbai'];
const getWeather1=(city1)=>{
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city1, options) 
    .then(response => response.json())
    .then(response => {
        switch(city1){
       case 'delhi': delhi_cloud.innerHTML = response.cloud_pct
        delhi_feels.innerHTML = response.feels_like
        delhi_humidity.innerHTML = response.humidity
        delhi_max.innerHTML = response.max_temp
        delhi_min.innerHTML = response.min_temp
        delhi_temp.innerHTML = response.temp
        delhi_deg.innerHTML = response.wind_degrees
        delhi_speed.innerHTML = response.wind_speed;
        break;
        case 'kolkata':kolkata_cloud.innerHTML = response.cloud_pct
        kolkata_feels.innerHTML = response.feels_like
        kolkata_humidity.innerHTML = response.humidity
        kolkata_max.innerHTML = response.max_temp
        kolkata_min.innerHTML = response.min_temp
        kolkata_temp.innerHTML = response.temp
        kolkata_deg.innerHTML = response.wind_degrees
        kolkata_speed.innerHTML = response.wind_speed;
        break;
        case 'Chennai': 
        Chennai_cloud.innerHTML = response.cloud_pct
        Chennai_feels.innerHTML = response.feels_like
        Chennai_humidity.innerHTML = response.humidity
        Chennai_max.innerHTML = response.max_temp
        Chennai_min.innerHTML = response.min_temp
        Chennai_temp.innerHTML = response.temp
        Chennai_deg.innerHTML = response.wind_degrees
        Chennai_speed.innerHTML = response.wind_speed;
        break;case 'Mumbai':Mumbai_cloud.innerHTML = response.cloud_pct
        Mumbai_feels.innerHTML = response.feels_like
        Mumbai_humidity.innerHTML = response.humidity
        Mumbai_max.innerHTML = response.max_temp
        Mumbai_min.innerHTML = response.min_temp
        Mumbai_temp.innerHTML = response.temp
        Mumbai_deg.innerHTML = response.wind_degrees
        Mumbai_speed.innerHTML = response.wind_speed;
        break;
        }
    })
    .catch(err => console.error(err));
}
cities.map((item)=>{getWeather1(item)})