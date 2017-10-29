import React, {Component} from 'react';
import {sounds} from "../../helpers";
import Login from "../Login";
import { BingSpeechClient, VoiceVoiceSynthesisResponse } from 'bingspeech-api-client';

var colors = ["button turquoise","button crimson","button purple","button yellow","button blue"];

class SoundCard extends Component {



    handleClick = (e) => {
        // var msg = new SpeechSynthesisUtterance();
        // //var voices = window.speechSynthesis.getVoices();
        // msg.text = e.target.innerHTML;
        // // msg.lang = 'ta-MY';
        // window.speechSynthesis.speak(msg);

        let subscriptionKey = '5e128f97f2ba48328b40879815b1366a';
        let client = new BingSpeechClient(subscriptionKey);
        console.log("CLIENT IS " + client);
        client.synthesizeStream('I have a dream').then(audioStream => console.log(audioStream));
    };
    setUser;

    render() {
        const listItems = sounds().map((sound, index) =>
            <div className="column has-text-centered is-2">
                <button className={colors[Math.floor(Math.random()*5)]} key={sound} onClick={(e) => this.handleClick(e)}>
                    {sound}
                </button>
            </div>
        );
        return (
            <div>
                <Login setUser={this.props.setUser}/>
                <div className="section">
                    <div className="container">
                        <div className="columns is-multiline">
                            {listItems}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default SoundCard;
