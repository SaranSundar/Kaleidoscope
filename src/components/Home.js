import React, {Component} from 'react';
import Login from "./Login";

class Home extends Component {
    callAppSetUser = (user) => {
        this.props.setUser(user);
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Login setUser={this.callAppSetUser}/>
                <div className="parallax" id="books">
                    <div className="container has-text-centered">
                        <span className="pops">Jump start your child's education!</span>
                    </div>
                </div>
                <div className="content container has-text-centered">
                    <div className="text">
                        <h1 className="title">The Goal</h1>
                        <h2>Coming from a background in teaching, our team is dedicated to create something both fun and
                            educational,
                            designed for kids to get ahead of the curve and excel.</h2>
                    </div>
                    <div className="columns">
                        <div className="column has-text-centered">
                            <img className="profile"
                                 src="https://scontent.fftw1-1.fna.fbcdn.net/v/t1.0-9/26195985_191325288115098_4224693865787201271_n.jpg?oh=af105eba9e6d29007853c806fadcbb0c&oe=5B1ADA74"
                                 alt="Abhishek"/>
                            <h1>Abhishek Dayal</h1>
                        </div>
                        <div className="column has-text-centered">
                            <img className="profile"
                                 src="https://scontent.fftw1-1.fna.fbcdn.net/v/t31.0-8/17546691_10212072514146713_2979458804211560338_o.jpg?oh=5ba345be509f70f4f121accca76e99d4&oe=5ADF9C3C"
                                 alt="Alvin"/>
                            <h1>Alvin Lo</h1>
                        </div>
                        <div className="column has-text-centered">
                            <img className="profile"
                                 src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1714125/profile/profile-512.jpg?1516815428"
                                 alt="Chris"/>
                            <h1>Chris Nunes</h1>
                        </div>
                        <div className="column has-text-centered">
                            <img className="profile"
                                 src="https://files.slack.com/files-pri/T7QF7AU0P-F7RLD0UTW/image_uploaded_from_ios.jpg"
                                 alt="Nikhil"/>
                            <h1>Nikhil Gupta</h1>
                        </div>
                        <div className="column has-text-centered">
                            <img className="profile"
                                 src="https://scontent.fftw1-1.fna.fbcdn.net/v/t1.0-9/14446031_1303187519738245_5581739972931163004_n.jpg?oh=18acf3eb38aa557620341ff926a36060&oe=5ADDABA4"
                                 alt="Saran"/>
                            <h1>Saran Sundararajan</h1>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default Home;
