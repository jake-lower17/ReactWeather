var React = require('react');
var WeatherForm = require('WeatherForm');
var Message = require('Message');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({

  getInitialState: function () {
    return {
      isLoading: false,
      errorMessage: undefined
    };
  },

  handleSearch: function (location) {
    var that = this;

    this.setState({
      isLoading: true
    });
    openWeatherMap.getTemp(location).then(function (temp) {
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    }, function (e) {
      that.setState({
        isLoading: false,
        errorMessage: e.message
      });
    });
  },

  render: function () {
    var { isLoading, temp, location, errorMessage } = this.state;

    function renderError() {
      if (typeof errorMessage === 'string') {
        return (
          <ErrorModal message = { errorMessage } />
        );
      }
    }

    function renderMessage() {
      if (isLoading) {
        return <h3 className="text-center">Loading...</h3>;
      }else if (temp && location){
        return <Message location={location} temp={temp}/>
      }
    }

    return (
      <div>
        <h1 className="text-center">Get Competitive</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>
    );
  }
});

module.exports = Weather;
