import React, {Component} from 'react';
import Login from "./Login";

class Home extends Component {
    constructor(props) {
        super(props);
    }

    callAppSetUser = (user) => {
        this.props.setUser(user);
    };

    render() {
        return (
            <div>
                <Login setUser={this.callAppSetUser}/>
                <div className="parallax" id="books">
                    <div className="container has-text-centered">
                        <span className="pops">Jump-start your child's education!</span>
                    </div>
                </div>
                <div className="test">
                </div>
            </div>
        );
    }
}


export default Home;
