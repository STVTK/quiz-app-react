var React = require('react');
var {hashHistory} = require('react-router');
var Initial = React.createClass({
    handleForm: function (e) {
        e.preventDefault();
        if (this.refs.name.value.length > 0) {
            this.props.onSubmit();
        } else {
            //TODO: show a tooltip telling that the name cannot be empty
        }
    },
    render: function () {
        return (
            <div>
                <h2>Welcome to my first react app</h2>
                <form onSubmit={this.handleForm}>
                    <input type="text" className="form-control"
                           placeholder="Enter your name here to start the test"
                           ref="name" onChange={this.props.onChange}
                           name="name"
                    />
                    <div className="input-group centered">
                        <input type="checkbox" onChange={this.props.onChange} name="SQ"/>
                        <label>Shuffle Questions</label>
                    </div>
                    <div className="input-group centered">
                        <input type="checkbox" ref="SA" onChange={this.props.onChange} name="SA"/>
                        <label>Shuffle Answer</label>
                    </div>
                    <button className="btn btn-primary">Start the Test</button>
                </form>
            </div>
        )
    }
});

module.exports = Initial;