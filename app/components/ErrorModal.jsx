var React = require('react');

var ErrorModal = React.createClass({
  getDefaultProps: function () {
    return {
      title: 'Error'
    };
  },

  componentDidMount: function () {
      var modal = new Foundation.Reveal($('#error-modal'));
      modal.open();
  },

  render: function () {
    return(
      <div className="reveal tiny text-center" id="error-modal" data-reveal="">
        <h4>Error Title</h4>
        <p>Error Message</p>
        <p><button className="button hollow" data-close="">Okay</button></p>
      </div>
    );
  }
});

module.exports = ErrorModal;
