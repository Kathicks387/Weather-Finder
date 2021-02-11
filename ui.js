class UI {
    constructor(){
       this.name = document.getElementById('w-location');
       this.descript = document.getElementById('w-descript');
       this.temp = document.getElementById('w-string');
       this.icon = document.getElementById('w-icon');
       this.humidity = document.getElementById('w-humidity');
       this.visibility = document.getElementById('w-visibility');
       this.feelsLike = document.getElementById('w-feels-like');
       this.windSpeed = document.getElementById('w-wind');
       
    

    }

    paint(weather) {
        this.name.textContent = weather.name;
        this.descript.textContent = weather.weather[0].description.toUpperCase();
        this.temp.textContent = `${weather.main.temp}° F`;
        var iconValue = weather.weather[0].icon;
        this.icon.setAttribute('src', `http://openweathermap.org/img/w/${iconValue}.png`);
        this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}%`;
        this.visibility.textContent = `${weather.visibility} Visibility`;
        this.feelsLike.textContent = `Feels like ${weather.main.feels_like}° F`;
        this.windSpeed.textContent = `Wind Speed at ${weather.wind.speed} MPH`;
    }
  
}