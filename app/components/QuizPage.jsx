var React = require('react');
var axios = require('axios');
var Question = require('Question');
var contentful = require('contentful')


var QuizPage = React.createClass({
    getInitialState: function () {
        return ({
            questions: {},
            currentQuestion: {},
            currentQuestionId: 0
        });
    },
    componentWillMount: function () {
        this.updateQuestions();
    },
    componentWillUpdate: function () {
        //this.handleNextQuestion();
    },
    updateQuestions: function () {
        var client = contentful.createClient({
            space: 't8ilgo7r311e',
            accessToken: '0ce898285f9b61ef67fd1be61603e11db4fe4f19e17e33abe170d8d931d9ffee',
            content_type: 'qa'
        });
        self = this;
        client.getEntries().then(function (promise) {
            var entries = self.props.sq ? self.shuffleQuestions(promise.items[0].fields.qa) : promise.items[0].fields.qa;
            if (entries.length > 0) {
                self.setState({
                    questions: entries,
                    currentQuestionId: 0,
                    currentQuestion: entries[self.state.currentQuestionId]
                });
            }
        });
    },
    shuffleQuestions: function (array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    },
    handleNextQuestion: function (id) {
        console.log("bello" + id);
        if (this.state.questions.length > 0) {
            this.setState({
                currentQuestion: this.state.questions[id],
                currentQuestionId: id
            });
        }

    },
    renderQuestion: function () {
        if (this.state.questions.length > 0) {
            return (
                <Question question={this.state.currentQuestion}
                          questionId = {this.state.currentQuestionId}
                          nextQuestion={this.handleNextQuestion}
                          shuffleAnswers={this.props.shuffleAnswers}

                />
            )
        } else {
            return (<div><h1>hi</h1></div>)
        }
    },

    render: function () {
        return (
            <div>
                {this.renderQuestion()}
            </div>
        )
    }
});

module.exports = QuizPage;
