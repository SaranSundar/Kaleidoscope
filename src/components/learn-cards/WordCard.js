import React, {Component} from 'react';
import {words} from "../../helpers";
import Login from "../Login";

var colors = ["button turquoise","button crimson","button purple","button yellow","button blue"];

class WordCard extends Component {

    handleClick = (e) => {
        var msg = new SpeechSynthesisUtterance();
        //var voices = window.speechSynthesis.getVoices();
        msg.text = e.target.innerHTML;
        // msg.lang = 'ta-MY';
        window.speechSynthesis.speak(msg);
    };
    setUser;

    render() {
        const listItems = words().map((sound, index) =>
            <div className="column has-text-centered is-2">
                <button className={colors[Math.floor(Math.random()*5)]} key={sound} onClick={(e) => this.handleClick(e)}>
                    {sound}
                </button>
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
