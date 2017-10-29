import React, {Component} from 'react';
import {sounds} from "../../helpers";
import Login from "../Login";

var colors = ["button turquoise", "button crimson", "button purple", "button yellow", "button blue"];

class WordCard extends Component {


    // hconstructor(props) {
    //     super(props);
    //     this.state = ({
    //         boxColor: null,
    //         bgImg: null,
    //         textColor: null,
    //     });

    // }


    handleClick = (e) => {
        var msg = new SpeechSynthesisUtterance();
        //var voices = window.speechSynthesis.getVoices();
        msg.text = e.target.innerHTML;
        // msg.lang = 'ta-MY';
        window.speechSynthesis.speak(msg);
    };
    setUser;


    render() {
        const listItems = sounds().map((sound, index) =>
            <div className="column has-text-centered is-2" key={sound}>
                <button className={colors[Math.floor(Math.random() * 5)]}
                        onClick={(e) => this.handleClick(e)}>
                    {sound}
                </button>
                <img    />
            </div>
        );
        return (
            <div>
                <Login setUser={this.props.setUser}/>
                <div className="container" style={{marginTop: "30px"}}>
                    <div className="columns is-multiline">
                        {listItems}
                    </div>
                </div>
            </div>
        );
    }

}


export default WordCard;
