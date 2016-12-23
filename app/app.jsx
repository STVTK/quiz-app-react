var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Question = require('Question');
var Initial = require('Initial');
var Result = require('Result');
var Layout = require('Layout');
var QuizApp = require('QuizApp');

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={QuizApp}/>
        </Route>
    </Router>,
    document.getElementById('app')
);
