var React = require('react');
var Initial = require('Initial');
var QuizPage = require('QuizPage');

var QuizApp = React.createClass({
    getInitialState: function () {
        return {
            initialPage: true,
            name: '',
            SQ: false,
            SA: false,
            questionPage: false
        }
    },
    handleChange: function (element) {
        if (element.target.name != 'name') {
            this.setState({
                [element.target.name]: $(element.target).is(':checked')
            })
        } else {
            this.setState({
                [element.target.name]: element.target.value
            });
        }
    },
    handleInitialForm: function () {
        this.setState({
            initialPage: false,
            questionPage: true
        });
    },
    render: function () {
        if (this.state.initialPage) {
            return (
                <div id="view">
                    <Initial onSubmit={this.handleInitialForm} onChange={this.handleChange}/>
                </div>
            )
        } else if (this.state.questionPage) {
            return (
                <div id="view">
                    <QuizPage sq={this.state.SQ} sa={this.state.SA}/>
                </div>
            )
        }
    }
});

module.exports = QuizApp;
