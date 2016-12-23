var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = () => {
    return (
        <header>
            <div className="container">
                <nav className="collapse navbar-collapse">
                    <div className="row">
                        <div className="navbar navbar-default">
                            <ul className="nav navbar-nav pull-right">
                                {/*<li>*/}
                                    {/*<IndexLink to="/result" activeClassName="active">Finish Test</IndexLink>*/}
                                {/*</li>*/}
                                {/*<li>*/}
                                    {/*<Link to="/" activeClassName="active">Redo Test</Link>*/}
                                {/*</li>*/}
                                <li>
                                    <Link to="/about" activeClassName="active">About</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

const style = {}

module.exports = Nav;
