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
                                 src="https://scontent-dft4-2.xx.fbcdn.net/v/t31.0-8/18359216_101454380435523_4392569105060136075_o.jpg?oh=e8bcf4d05e8ba72c5a68af3d8a3f2c52&oe=5A72802D"
                                 alt="Abhishek"/>
                            <h1>Abhishek Dayal</h1>
                        </div>
                        <div className="column has-text-centered">
                            <img className="profile"
                                 src="https://scontent-dft4-2.xx.fbcdn.net/v/t31.0-8/17546691_10212072514146713_2979458804211560338_o.jpg?oh=c86a59760684f5a63b6787f9b8a75173&oe=5A68F53C"
                                 alt="Alvin"/>
                            <h1>Alvin Lo</h1>
                        </div>
                        <div className="column has-text-centered">
                            <img className="profile"
                                 src="https://avatars0.githubusercontent.com/u/20052335?s=400&u=7496359bd1b63bf8d92cc9f8ea46319635feb74c&v=4"
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
                                 src="https://scontent-dft4-2.xx.fbcdn.net/v/t1.0-9/14446031_1303187519738245_5581739972931163004_n.jpg?oh=add000ed06428de065786ff83900ac34&oe=5A6704A4"
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
