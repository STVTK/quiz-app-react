var React = require('react');
var Nav = require('Nav');

var Layout = (props) => {
    return (
        <div>
            <Nav/>
            <div className="container component-section">
                {props.children}
            </div>
        </div>
    );
};

module.exports = Layout;
