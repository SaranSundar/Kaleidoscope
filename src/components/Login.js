import React, {Component} from 'react';
import {auth, provider} from './firebase'
import {Link} from "react-router";

class Login extends Component {

    logout = () => {
        auth.signOut().then(() => {
            this.setState({user: null});
        });
    };
    login = () => {
        auth.signInWithPopup(provider).then((result) => {
            const user = result.user;
            this.setState({user: user});
            this.updateUser();
        });
    };

    updateUser = () => {
        this.props.setUser(this.state.user);
        //this.context.router.transitionTo(`/catalog`);
    };

    constructor(props) {
        super(props);
        this.state = ({
            username: '',
            user: null
        });
    }

    componentDidMount() {
        auth.onAuthStateChanged((user) => {
            if (user) {
                this.setState({
                    user: user
                });
                this.updateUser();
            }
        });
    }


    render() {
        var username = "Guest";
        var photosrc = '';
        if (this.state.user) {
            username = this.state.user.displayName || this.state.user.email;
            photosrc = this.state.user.photoURL;
        }
        return (
            <div>
                <section className="hero is-medium">
                    <div className="hero-head">
                        <div className="navbar darkblue">
                            <div className="container">
                                <div className="navbar-brand">
                                    <Link className="navbar-item" to="/">
                                        <img
                                            src="https://files.slack.com/files-pri/T7QF7AU0P-F7RKRFNR3/kaleidoscope.png"
                                            alt="Kaleidoscope"/>
                                    </Link>

                                    <Link className="navbar-item" to="/">Home</Link>
                                    <Link className="navbar-item" to="/catalog">Learn</Link>
                                </div>
                                <div className="navbar-menu">
                                    <div className="navbar-end">
                                        <a className="navbar-item">
                                            <h1>{username}</h1>
                                        </a>
                                        <a className="navbar-item">
                                            {/*<h1>Login</h1>*/}
                                            {
                                                this.state.user ?
                                                    <div className="navbar-item" onClick={this.logout}><strong>Log
                                                        Out</strong></div> :
                                                    <div className="navbar-item" onClick={this.login}><strong>Log
                                                        In</strong></div>
                                            }
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

Login.contextTypes = {
    router: React.PropTypes.object
};

export default Login;
