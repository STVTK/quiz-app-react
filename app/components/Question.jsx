var React = require('react');
var Question = React.createClass({
    getInitialState: function () {
        return ({
            answers: this.props.answers,
            correct_answer_id: (this.props.question || {}).correct,
            question: this.props.question,
            id: this.props.questionId
        });
    },
    componentWillMount: function () {
        /*var question = this.props.question;
        var answers = this.props.sa ? this.shuffleAnswers(question.answers) : question.answers;

        debugger
        this.setState({
            answers: answers,
            correct_answer_id: question.correct,
            question: question.question,
            id: this.props.questionId
        });*/
    },
    shuffleAnswers: function (array) {
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
    handleSubmitAnswer: function (element) {
        if (element.currentTarget.value == this.state.correct_answer_id) {
            debugger
            this.props.nextQuestion(this.state.id + 1);
        } else {
            var errorMessage = $('#error-message');
            errorMessage.alert();
            errorMessage.fadeTo(2000, 500).slideUp(500, function () {
                errorMessage.slideUp(500);
            });
        }
    },
    renderAnswers: function () {
        var self = this;
        return (
            <div>
                <div className="alert alert-danger hidden" id="error-message">
                    Please Try again
                </div>
                <div className="answers-div">
                    {
                        !this.state.answers ? <div>Loading...</div> :
                        this.state.answers.map(function (answer, index) {
                            return <div key={index}>Foo</div>
                            /*return (
                                <label className="btn btn-lg btn-primary answer-btn" key={answer.id}>
                                    <input type="radio" name="answer" onChange={self.handleSubmitAnswer}
                                           value={answer.id}/> {answer.answer}
                                </label>
                            )*/
                        })
                    }
                </div>
            </div>
        )
    },
    finishQuiz: function () {
        console.log("Finish quiz");
    },
    render: function () {
        return (
            <div>
                <h2>Question #{this.state.id + 1}</h2>
                <h3>{this.state.question}</h3>
                <div>{this.renderAnswers()}</div>
                <div>
                    <button className="btn btn-info" onClick={this.finishQuiz}>Finish Quiz</button>
                </div>
            </div>
        )
    }
});
module.exports = Question;