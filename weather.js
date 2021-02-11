 class Weather {
     constructor(city) {
         this.apiKey = '8421e0a05a4786323762cc826883e8cc';
         this.city = city;
     }

     // Fetch weather from API
     async getWeather() {
         const response = await fetch(`https://api.openweathermap.org/data/2.5/weather/?q=${this.city}&name&appid=${this.apiKey}&units=imperial&uvi&`);

         const responseData = await response.json();

        return responseData;
     }

     // Change weather location
     changeLocation(city) {
        this.city = city;
         
     }
 }