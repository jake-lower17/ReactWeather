var React = require('react');
var { Link } = require('react-router');

// var Examples = React.createClass({
//   render: function () {
//     return (
//       <h2>Examples Component</h2>
//     );
//   }
// });

var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center">Examples!!</h1>
      <p>Here are a few examples</p>
      <ol>
        <li><Link to="/?location=snake187eh">snake187eh</Link></li>
        <li><Link to="/?location=UnsocialRock">UnsocialRock</Link></li>
        <li><Link to="/?location=lower7">lower7</Link></li>
      </ol>
    </div>
  );
};

module.exports = Examples;
