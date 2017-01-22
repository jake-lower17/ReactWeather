var React = require('react');
var { Link, IndexLink } = require('react-router');

var Nav = React.createClass({
  onSearch: function (e) {
    e.preventDefault();
    var navSearch = this.refs.navSearch.value;
    var encodedNavSearch = encodeURIComponent(navSearch);
    if (navSearch.length > 0) {
      this.refs.navSearch.value = '';
      window.location.hash = '#/?psn=' + encodedNavSearch;
    }
  },

  render: function () {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">OWCT</li>
            <li>
              <IndexLink to="/" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>
                Get Competitive
              </IndexLink>
            </li>
            <li>
              <Link to="about" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>
                About
              </Link>
            </li>
            <li>
              <Link to="examples" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>
                Example
              </Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li>
                <input type="search" ref="navSearch" placeholder="Search by PSN"/>
              </li>
              <li>
                <input type="submit" className="button" value="Search PSN"/>
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
  },
});

module.exports = Nav;
