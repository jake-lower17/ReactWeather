var React = require('react');

// var About = React.createClass({
//   render: function () {
//     return (
//       <h2>About Component</h2>
//     );
//   }
// });

var About = (props) => {
  return (
    <div>
      <h1 className="text-centered page-title">About OWCT</h1>
      <p>Little App to track out teams competitive scores.</p>
    </div>
  );
};

module.exports = About;
