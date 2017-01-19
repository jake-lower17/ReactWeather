var axios = require('axios');

//const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=dd7a1c5db9234a998ba99108fbe5a7b8&units=imperial';
// 3847e3cde7c9d0bb983c8ee7d3433db7

//Overwatch
const OPEN_WEATHER_MAP_URL = 'https://api.lootbox.eu/psn/us/';

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    //var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
    var requestUrl = `${OPEN_WEATHER_MAP_URL}${encodedLocation}/profile`;
    return axios.get(requestUrl).then(function (res) {
      if (res.data.cod && res.data.message) {
        throw new Error('Unable to fetch weather.');
      }else {
        //return res.data.main.temp;
        return res.data.data.competitive.rank;
      }
    }, function (res) {
      
      throw new Error('Unable to fetch weather.');
    });
  }
};
