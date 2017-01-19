var React = require('react');

// var Message = React.createClass({
//   render: function () {
//     var { location, temp } = this.props;
//     return (
//       <div>
//         <p>It's {temp} in {location}</p>
//       </div>
//     );
//   }
// });

var Message = ({ temp, location }) => {
  return (
    <div>
      <p>It's {temp} in {location}</p>
    </div>
  );
};

module.exports = Message;
